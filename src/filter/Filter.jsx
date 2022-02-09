import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./filter.css";

function Filter() {
  const [filter, setfilter] = useState([{}]);
  

  const year = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  const year_func1 = (year_id) => {
    console.log(year_id);
    if (year_id) {
      axios
        .get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year_id}`
        )
        .then((res) => {
          console.log(
            
            res
          );
          setfilter(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=`)
        .then((res) => {
          console.log(
            
            res
          );
          setfilter(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  const launch = ["true","false"];

  const launch_func = (launch_id) => {
    console.log(launch_id);
    
      axios
        .get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch_id}`
        )
        .then((res) => {
          console.log(
            
            res
          );
          setfilter(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    
  };



  const land = ["true","false"];

  const land_func = (land_id) => {
    console.log(land_id);
    
      axios
        .get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${land_id}`
        )
        .then((res) => {
          console.log(
            
            res
          );
          setfilter(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    
  };


  

  useEffect(() => {
    axios
        .get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_year=`
        )
        .then((res) => {
          console.log(
            
            res
          );
          setfilter(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);






  return (
    <div>
      <div className="button-filter">
        <h4>Year Filter</h4>
        <div class="btn-group">
          

          {year?.map((e) => (
            <>
              <Link
                to="#"
                class="btn btn-primary"
                onClick={() => {
                  year_func1(e);
                 
                  
                }}
              >
                {e}
              </Link>
            </>
          ))}
          <Link
            to="#"
            class="btn btn-primary"
            onClick={() => {
              year_func1();
             
            }}
          >
            All
          </Link>
        </div>
      </div>


      <div className="button-filter">
        <h4>Launch Filter</h4>
        <div class="btn-group">
          

          {launch?.map((e) => (
            <>
              <Link
                to="#"
                class="btn btn-primary"
                onClick={() => {
                  launch_func(e);
                 
                  
                }}
              >
                {e}
              </Link>
            </>
          ))}
          
        </div>
      </div>



      <div classame="button-filter">
        <h4>Landing Filter</h4>
        <div class="btn-group">
          

          {land?.map((e) => (
            <>
              <Link
                to="#"
                class="btn btn-primary"
                onClick={() => {
                  land_func(e);
                 
                  
                }}
              >
                {e}
              </Link>
            </>
          ))}
          
        </div>
      </div>

      <Container>
        <div className="row">
          {filter?.length === 0
            ? "NO data Found"
            : filter?.map((e) => (
                <div className="col-lg-4">
                  <Card id="card">
                    <Card.Img
                      variant="top"
                      className="img"
                      key={e?.flight_number}
                      src={e?.links?.mission_patch_small}
                    />
                    <Card.Body>
                      <Card.Title id="Ctitle">{e?.mission_name}</Card.Title>
                      <Card.Text>
                        <p>launch Year:{e?.launch_year}</p>
                        <p>Rocket Type:{e?.rocket?.rocket_type}</p>
                        {/* <p>Successful launch:{e?.launch_success}</p>
                        <p>Successful landing:{e?.is_tentative}</p> */}
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </div>
      </Container>
    </div>
  );
}

export default Filter;
