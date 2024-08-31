import React, { useState, useEffect } from "react";
import SideBar from "./SidebarAdmin/SidebarAdmin";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Add this line
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register the necessary components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Add this line
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [National, setNational] = useState([]);
  const [International, setInternational] = useState([]);
  const [companies, setCompanies] = useState(0); 
  const [students, setStudents] = useState(0); 
  const [blogCount, setBlogCount] = useState(0);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const userList = async () => {
    try {
      const user = await axiosInstance.get("/users/student", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
      setData(user.data.studentInfo);
      setStudents(user.data.studentInfo.length); 
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("/blogs");
      setBlogs(response.data);
      setBlogCount(response.data.length); 
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchChannels = async () => {
    try {
      const response = await axiosInstance.get("/channels");
      setCompanies(response.data.length); 
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get('/blogs');
        setBlogs(data);
        const nationalPartners = data.filter(partner => partner.role === 'National').length;
        const internationalPartners = data.filter(partner => partner.role === 'International').length;
        setNational(nationalPartners);
        setInternational(internationalPartners);
        console.log(`Number of National Partners: ${nationalPartners}`);
        console.log(`Number of International Partners: ${internationalPartners}`);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  
    fetchBlogs();
  }, []);


  useEffect(() => {
    userList();
    fetchBlogs();
    fetchChannels();
  }, []);

  const barChartData = {
    labels: ["Companies", "Students", "Blogs", "N.Partners", "I.Partners"],
    datasets: [
      {
        label: "Count",
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf", "#f1b34e", "#e64545"],
        data: [companies, students, blogCount, National, International], // Added National and International partners
      },
    ],
  };
  
  const barChartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(234, 236, 244, 1)",
          zeroLineColor: "rgba(234, 236, 244, 1)",
          drawBorder: false,
        },
      },
    },
  };
  
  const lineChartData = {
    labels: ["Companies", "Students", "Blogs", "N.Partners", "I.Partners"],
    datasets: [
      {
        label: "Count Over Time",
        data: [companies, students, blogCount, National, International], 
        borderColor: "#4e73df",
        fill: false,
      },
    ],
  };
  
  const lineChartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main px-3">
        <SideBar />
        <div className="col mt-4 app-content">
          <div className="row ">
            {/* Dashboard Cards */}
            <div className="col-md-6 col-xl-4 mb-3">
              <div className="card widget-content bg-midnight-bloom">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Companies</div>
                    <div className="widget-subheading">Number of total companies</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>{companies}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <div className="card widget-content bg-arielle-smile">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Students</div>
                    <div className="widget-subheading">Number of total students</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>{students}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <div className="card widget-content bg-grow-early">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Blogs</div>
                    <div className="widget-subheading">Number of total blogs created</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>{blogCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
            <div className="card widget-content bg-plum-plate">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">National Partner</div>
                    <div className="widget-subheading">Total National Partners</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>{National}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
            <div className="card widget-content bg-night-fade">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">International Partners</div>
                    <div className="widget-subheading"> Total International Partners</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>{International}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
            <div className="card widget-content bg-love-kiss">
                <div className="widget-content-wrapper text-white">
                  <div className="widget-content-left">
                    <div className="widget-heading">Reviews</div>
                    <div className="widget-subheading">Total submitted reviews</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-white">
                      <span style={{ margin: "60px" }}>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chart section */}
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Overview (Bar Chart)</h5>
                  <div className="chart-container" style={{ position: 'relative', height: '40vh' }}>
                    <Bar data={barChartData} options={barChartOptions} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Overview (Line Chart)</h5>
                  <div className="chart-container" style={{ position: 'relative', height: '40vh' }}>
                    <Line data={lineChartData} options={lineChartOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
