import React from "react";
import styles from '../Styles/App.module.css'
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { faDashboard } from "@fortawesome/free-solid-svg-icons";
const DashboardMenu = () => {
    return(
      <>
     <aside className= {styles.aside}>
      <div className= {styles.logoHeader}>
        <h1>Echo</h1>
      </div>
      <div className= {styles.nameCard}>
        <div className= {styles.names}>
          <label className= {styles.name}>Hi Daniel</label>
          <Link to = "/">
          <span className= {styles.buy}>Buy Premium</span>
          
          </Link>
        </div>
        <div className= {styles.notificationsAndSettings}>
        <div className= {styles.bell}>
          <div className= {styles.bell2}>
            <FontAwesomeIcon
            icon = {faBell}
            className= {styles.icons3}

            />
          </div>
        </div>
        <div className= {styles.settings}>
          <div className= {styles.gear}>
           <div className= {styles.gear2}>
            <FontAwesomeIcon
            icon={faGear}
            className= {styles.icons3}

            />
           </div>
          </div>
        </div>
        </div>
      </div>
      <nav className= {styles.navigationMenu}>
          <ul className= {styles.listItems}>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Recurring"
            className= {styles.dashboardLinks}
            >Recurring</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
            <li className= {styles.links58}>
            <div className= {styles.text}>
            <FontAwesomeIcon
            icon={faDashboard}
            className= {styles.icons3}
            />
            <Link to = "/Dashboard"
            className= {styles.dashboardLinks}
            >Dashboard</Link>
            </div>
            </li>
          </ul>
        </nav>
     </aside>
     </>
    )
}


export default DashboardMenu