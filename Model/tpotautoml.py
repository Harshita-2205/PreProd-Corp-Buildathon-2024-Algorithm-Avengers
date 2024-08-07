import numpy as np
import pandas as pd
from tpot import TPOTClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from scipy import stats
import seaborn as sns
import matplotlib.pyplot as plt
import json

# Function to perform a statistical Z-test for proportions
def statistical_test(y_test, y_pred):
    # Performing a Z-test for proportions
    n = len(y_test)
    p0 = 0.5
    phat = accuracy_score(y_test, y_pred)
    z = (phat - p0) / ((p0 * (1 - p0) / n) ** 0.5)
    p_value = stats.norm.cdf(z)
    return z, p_value

# Function to plot and save the distribution of accuracy scores
def plot_accuracy_distribution(y_pred):
    plt.figure(figsize=(10, 6))
    sns.histplot(y_pred, kde=True)
    plt.title('Distribution of Predicted Values')
    plt.xlabel('Predicted Value')
    plt.ylabel('Frequency')
    plt.savefig('accuracy_distribution.png')

# Function to run TPOT and return the results in JSON format
def run_tpot(path, target_column):
    df = pd.read_csv(path)
    
    if target_column not in df.columns:
        data = df.to_json(orient='records')
        message = f"Target column '{target_column}' not found in DataFrame."
        status = "err"
        result = {
            'data': data,
            'message': message,
            'status': status
        }
        return result
    
    # Separate features and target
    X = df.drop(columns=[target_column])
    y = df[target_column]

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Run TPOT
    tpot = TPOTClassifier(verbosity=2, generations=5, population_size=20, random_state=42)
    tpot.fit(X_train, y_train)

    # Evaluate the model
    y_pred = tpot.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    # Perform the statistical test
    z_value, p_value = statistical_test(y_test, y_pred)

    # Export the pipeline as code
    tpot.export('tpot_pipeline.py')

    # Plot the distribution of accuracy scores
    plot_accuracy_distribution(y_pred)
    
    data = {
        'best_pipeline': 'tpot_pipeline.py',
        'accuracy': accuracy,
        'z_value': z_value,
        'p_value': p_value
    }
    
    message = "TPOT analysis completed successfully."
    status = "succ"
    
    result = {
        'data': data,
        'message': message,
        'status': status
    }
    
    return result

# Example usage:
path = 'file_path.csv'
target_column = 'target_column_name'
result = run_tpot(path, target_column)
print(json.dumps(result, indent=4))
    