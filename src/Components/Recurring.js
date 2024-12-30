import React from "react";
import styles from '../Styles/App.module.css'
import DashboardMenu from "./DashboardMenu";
import Calendar from "./Calendar";
const Recurring = ({upcoming, onUpcomingClick}) => {
return(
 <>
 <div className= {styles.dashboardWrappedContainer}>
 <div className= {styles.dashboardContainer}>
    <DashboardMenu />
  </div>
  <div className= {styles.recurringContainer}>
   <header className= {styles.recurringHeader}>
    <div className= {styles.recurring}>
     <div className= {styles.recurringContent}>
        <h4>Recurring</h4>
    <div className= {styles.recurringButtons}>
     <div className= {styles.headerTabs}>
     <button 
     className= {styles.tabs}
     onClick={(e) => onUpcomingClick(e)}
     >
      <p>Upcoming</p>
      </button>
     </div>
     <div className= {styles.headerTabs}>
      <p>View All</p>
     </div>
     <div className= {styles.headerTabs}>
      <p>Calendar</p>
     </div>
    </div>
    <>
      <div className= {styles.boxContent2}>
      <div className= {styles.card}>
      <div className= {styles.cardHeader2}>
     <h4 className= {styles.seven}>Next 7 Days</h4>
     </div>
     <div className= {styles.wrappedCard}>
     <div className= {styles.cardBody2}>
     <div className= {styles.cardBodyContent}>
       <div className= {styles.cardContent3}>
        <h4>Nothing Due Soon</h4>
       </div>
       <div className= {styles.cardContentParagraph}>
        <p>You can relax, you have nothing</p>
        <br></br>
        <p>due within the next 7 days</p>
        </div>
        </div>
      </div>
      <div className= {styles.cardBody2}>
       <div className= {styles.cardBodyContent}>
        <Calendar />
       </div>
      </div>
      </div>
      </div>
      </div>
 </>
     </div>
    </div>
   </header>
  </div>
 </div>
 </>
)
}

export default Recurring