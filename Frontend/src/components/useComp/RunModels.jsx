import React, { useState } from 'react';
import InnerNav from './InnerNav';
import Models from './Models';

const RunModels = () => {
  const [tableHead, setTableHead]= useState("");
  const [tableData, setTableData]= useState("");
  document.addEventListener("DOMContentLoaded", ()=>{
    setTableHead(getCookie("tableHead"));
    setTableData(getCookie("tableBody"));
  })

  function getCookie(cookieName) {
    var cookiesArray = document.cookie.split("; ");
    for (var i = 0; i < cookiesArray.length; i++) {
      var cookie = cookiesArray[i];
      var cookieParts = cookie.split("=");
      if (cookieParts[0] === cookieName) {
        return cookieParts[1];
      }
    }
    return null;
  }
  return (
    <div className="relative bg-black h-auto w-screen">
      <InnerNav />
      <Models />
      <div
        style={{ display: "flex",justifyContent: "space-between", backgroundImage: "url('/images/bg1.jpg')" }}
        className="p-5"
      >
        <div
          className="form rounded-lg shadow-lg p-5"
          style={{
            flex: 1,
            marginRight: "20px",
            backgroundColor: "#F4F1FD",
            height: "80vh",
            borderRadius: "20px",
            overflowY: "auto",
            overflow:"scroll"
          }}
        >
          {/* Left form div Stands here */}


          {/* Model Training */}
          <br />
          <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}> <i class="fa-brands fa-strava" style={{ color: "#036EFD" }}></i> &nbsp; Model Training</h1><br/><br/>
          
          <br />
            {/* SVM Model */}
          <form>
             <h1 style={{ fontSize: "25px", fontWeight: "bolder", color:"grey" }}><i class="fa-solid fa-gears" style={{color:"#036EFD", fontSize:"20px"}}></i> &nbsp;SVM Model</h1>
            <div class="mb-3"> 
              <br />
              <label htmlFor="KernelSVM">Enter Kernal value:</label>
              <br />
              <select name="KernelSVM" id="KernelSVM" style={{borderRadius:"20px", width:"20vh"}}>
                <option value="rbf">rbf</option>
              </select>
            </div>
            <label htmlFor="cValSVM">Enter C value:</label>
            <input type="text" class="form-control" id="cValSVM" name="cValSVM" placeholder=" Enter value between 10^-3 to 10^3"  style={{borderRadius:"20px"}}/>
            <br />
            <label htmlFor="gammaValSVM">Enter Gamma value:</label>
            <input type="text" class="form-control" id="gammaValSVM" name="gammaValSVM" placeholder=" Enter value between 10^-3 to 10^3"  style={{borderRadius:"20px"}}/>
             <br />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px",width:"40vh" ,background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Run SVM Model
            </button>
          </form>
          <br />
          <br />
          {/* Random Forest  */}

          <form>
             <h1 style={{ fontSize: "25px", fontWeight: "bolder", color:"grey" }}><i class="fa-solid fa-angle-down" style={{color:"#036EFD", fontSize:"20px"}}></i> &nbsp; Random Forest </h1>
            <br />
            <div class="mb-3">
              
            <label htmlFor="nestimatorsRF">Enter N Estimators value:</label>
            <input type="text" class="form-control" id="nestimatorsRF" name="nestimatorsRF" placeholder=" Enter value between 1 to infinity"  style={{borderRadius:"20px"}}/>
            
            <br />

            <label htmlFor="MaxDepthDtree">Enter Max Depth value:</label>
            <input type="text" class="form-control" id="MaxDepthDtree" name="MaxDepthDtree" placeholder=" Enter value between 1 to infinity or none"  style={{borderRadius:"20px"}}/>
            
            <br />

            <label htmlFor="minSampleSplit">Enter Min Sample-Split value:</label>
            <input type="text" class="form-control" id="minSampleSplit" name="minSampleSplit" placeholder=" Enter value between 2 to infinity"  style={{borderRadius:"20px"}}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px",width:"40vh" ,background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Run Random Forest Model
            </button>
          </form>
          <br />
          <br />
          {/* XGBoost  */}

          <form>
             <h1 style={{ fontSize: "25px", fontWeight: "bolder", color:"grey" }}> <i class="fa-solid fa-bars" style={{color:"#036EFD", fontSize:"20px"}}></i> &nbsp;XGBoost </h1>
            <br />
            <div class="mb-3">
              
            <label htmlFor="NEstimatorsXG">Enter N-Estimators value:</label>
            <input type="text" class="form-control" id="NEstimatorsXG" name="NEstimatorsXG" placeholder=" Enter value between 0 to infinity"  style={{borderRadius:"20px"}}/>

            <br />

            <label htmlFor="MaxDepthXG">Enter Max Depth value:</label>
            <input type="text" class="form-control" id="MaxDepthXG" name="MaxDepthXG" placeholder=" Enter value between 3 to infinity"  style={{borderRadius:"20px"}}/>

            <br />

            <label htmlFor="LearnRateXG">Enter Learning Rate value:</label>
            <input type="text" class="form-control" id="LearnRateXG" name="LearnRateXG" placeholder=" Enter value between 0.01 to 0.3"  style={{borderRadius:"20px"}}/>
             <br />
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px",width:"40vh" ,background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Run XGBoost
            </button>
          </form>
          <br />
          <br />

          {/* Decision Tree  */}
          <form>
             <h1 style={{ fontSize: "25px", fontWeight: "bolder", color:"grey" }}><i class="fa-solid fa-wand-magic-sparkles" style={{color:"#036EFD", fontSize:"20px"}}></i> &nbsp;Decision Tree </h1>
            <br />
            <br />
            <label htmlFor="MaxDepthDtree">Enter Max Depth value:</label>
            <input type="text" class="form-control" id="MaxDepthDtree" name="MaxDepthDtree" placeholder=" Enter value between 1 to infinity"  style={{borderRadius:"20px"}}/>
            
            <br />
            <label htmlFor="minSampleSplitDtree">Enter Min Sample-Split value:</label>
            <input type="text" class="form-control" id="minSampleSplitDtree" name="minSampleSplitDtree" placeholder=" Enter value between 2 to infinity"  style={{borderRadius:"20px"}}/>

            <br />
              <label htmlFor="KernelSVM">Enter Kernal value:</label>
              <br />
              <select name="KernelSVM" id="KernelSVM" style={{borderRadius:"20px", width:"20vh"}}>
                <option value="gini">gini</option>
                <option value="entropy">entropy</option>
                <option value="log-loss">log-loss</option>
              </select>
              <br />
             <br />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px",width:"40vh" ,background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Run Decision Tree Model
            </button>
          </form>
          <br />
          <br />
          {/* Bagging  */}
          <form>  <h1 style={{ fontSize: "25px", fontWeight: "bolder", color:"grey" }}><i class="fa-solid fa-bolt" style={{color:"#036EFD", fontSize:"20px"}}></i> &nbsp;Bagging </h1>
            <div class="mb-3">
            <br />
            <label htmlFor="NEstimatorsBagging">Enter N-Estimators value:</label>
            <input type="text" class="form-control" id="NEstimatorsBagging" name="NEstimatorsBagging" placeholder=" Enter value between 1 to infinity"  style={{borderRadius:"20px"}}/>
            
            <br />

            <label htmlFor="MaxSampleBagging">Enter Max Sample value:</label>
            <input type="text" class="form-control" id="MaxSampleBagging" name="MaxSampleBagging" placeholder=" Enter value between 1 to infinity"  style={{borderRadius:"20px"}}/>
            
            <br />

            <label htmlFor="MaxFeaturesBagging">Enter Max Feature value:</label>
            <input type="text" class="form-control" id="MaxFeaturesBagging" name="MaxFeaturesBagging" placeholder=" Enter value between 0 to 1"  style={{borderRadius:"20px"}}/>

            <br />

             <br />
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px",width:"40vh" ,background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> Run Bagging
            </button>
            </form>
          <br />
          <br />

          
        </div>


        {/* Table div Starts Here */}
        <div
            className="table-primary rounded-lg shadow-lg p-5 "
            style={{
              flex: 1,
              marginLeft: "20px",
              backgroundColor: "whitesmoke",
              borderRadius: "20px",
              backgroundImage:"url('/images/grad1 copy.png')" ,
            }}
          >
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
           
           <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}> <i className="fa-solid fa-file-csv" style={{ color: "#036EFD" }}></i> &nbsp; Ouput Dataset</h1><br/>
          </div>
          <br />
          <table
              className="table overflow-scroll"
              style={{
                backgroundColor: "#FCD571",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <thead className="font-bold" dangerouslySetInnerHTML={{ __html: tableHead}}></thead>
              <tbody dangerouslySetInnerHTML={{ __html: tableData }}></tbody>
            </table>
        </div>
      </div>

    </div>
  );
};

export default RunModels;