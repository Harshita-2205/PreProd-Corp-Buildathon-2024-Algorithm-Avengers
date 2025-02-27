import pandas as pd
import matplotlib.pyplot as plt
import warnings
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import joblib

warnings.filterwarnings('ignore')

def load_data(file_name):
    try:
        data = pd.read_csv(file_name)
        return data
    except Exception as e:
        print(f"Error occurred while loading the data from {file_name}: ", str(e))

def train_decision_tree(train_data, test_data):
    try:
        X_train = train_data.drop(columns=['fetal_health'])  # Features
        y_train = train_data['fetal_health']  # Target variable

        X_test = test_data.drop(columns=['fetal_health'])  # Features
        y_test = test_data['fetal_health']  # Target variable

        # Define parameters for the Decision Tree
        criterion = 'gini'
        max_depth = None
    
        # Initialize and train the Decision Tree classifier
        clf = DecisionTreeClassifier(criterion=criterion, max_depth=max_depth, random_state=42)
        clf.fit(X_train, y_train)

        # Make predictions on the training and testing data
        y_train_pred = clf.predict(X_train)
        y_test_pred = clf.predict(X_test)
        
        return clf, criterion, max_depth, X_train, y_train, y_train_pred, X_test, y_test, y_test_pred
    except Exception as e:
        print("Error occurred while training the decision tree: ", str(e))

def evaluate_decision_tree(clf, criterion, max_depth, X_train, y_train, y_train_pred, X_test, y_test, y_test_pred):
    try:
        # Evaluate the model's performance
        train_accuracy = accuracy_score(y_train, y_train_pred)
        test_accuracy = accuracy_score(y_test, y_test_pred)
        
        train_report = classification_report(y_train, y_train_pred)
        test_report = classification_report(y_test, y_test_pred)
        
        train_matrix = confusion_matrix(y_train, y_train_pred)
        test_matrix = confusion_matrix(y_test, y_test_pred)
        
        # Output the criterion, max depth, and performance
        print(f"CRITERION: {criterion}")
        print(f"MAX_DEPTH: {max_depth}")
        print(f"TRAINING ACCURACY: {train_accuracy * 100:.2f}%")
        print(f"TESTING ACCURACY: {test_accuracy * 100:.2f}%")
        print("\nTraining Classification Report:\n", train_report)
        print("\nTesting Classification Report:\n", test_report)
        print("\nTraining Confusion Matrix:\n", train_matrix)
        print("\nTesting Confusion Matrix:\n", test_matrix)
        
        # Save the trained model to a file
        model_filename = 'decision_tree_model.pkl'
        joblib.dump(clf, model_filename)
        print(f"Trained model saved as {model_filename}")

        return train_accuracy,test_accuracy
    except Exception as e:
        print("Error occurred while evaluating the decision tree: ", str(e))

if __name__ == "__main__":
    # Define the paths to the training and testing files
    X_train_file = 'X_train.csv'
    X_test_file = 'X_test.csv'

    Y_train_file = 'y_train.csv'
    Y_test_file = 'y_test.csv'
    
    # Load data
    X_train_data = load_data(X_train_file)
    X_test_data = load_data(X_test_file)

    y_train_data = load_data(Y_train_file)
    y_test_data = load_data(Y_test_file)
    

    train_data = pd.concat([X_train_data, y_train_data], axis=1)
    test_data = pd.concat([X_test_data, y_test_data], axis=1)

    # Train the Decision Tree classifier
    clf, criterion, max_depth, X_train, y_train, y_train_pred, X_test, y_test, y_test_pred = train_decision_tree(train_data, test_data)
    
    # Evaluate the Decision Tree classifier
    evaluate_decision_tree(clf, criterion, max_depth, X_train, y_train, y_train_pred, X_test, y_test, y_test_pred)
