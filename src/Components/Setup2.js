import React from "react";
import styles from '../Styles/App.module.css'

const Setup2 = ({data, onChange, steps, error, ready, openTellerLink, generalError, exchangePublicToken, onSubmit,onSuccess, open, linkToken2}) => {
    return(
        <div className= {styles.containerSetup}>
         <div className= {styles.setupContainer2}>
         <div className= {styles.containerSetup2}>
            <div className = {styles.card}>
            <div className= {styles.cardBody2}>
            <div className= {styles.cardSetupHeader}>
            <div className= {styles.headerTabs2}>
             <h1>Echo</h1>
            </div>
            <div className= {styles.headerTabs2}>
            <h1>Personal Information</h1>
            </div>
            <div className= {styles.headerTabs2}>
            <h1>Choose your Goals</h1>
            </div>
            <div className= {styles.headerTabs2}>
            <h1>Link Accounts</h1>
            </div>
            <div className= {styles.headerTabs2}>
            <h1>Mission Compree</h1>
            </div>
            </div>
            
            <form className= {styles.setupBodyWrapper}>
             {steps === 1 && (
              <>
            <div className= {styles.setupBodyContainer}>
            <div className= {styles.setupBody}>
             <h1>Lets get Personal, Daniel</h1>
             <p>Please tell us more about yourself</p>
             </div>
             <div className= {styles.inputFieldsSetup}>
              <h1>Enter your Info</h1>
                <input type = "text"
                placeholder="First Name"
                />
                <input type="text"
                placeholder="Last Name"

                />
                <input type = "text"
                placeholder="Phone Number"

                />
                <input type = "text"
                placeholder="Birthday"
                />
                <input type = "text"
                placeholder="Gender"

                />
                 <div className= {styles.inputFieldsSetup2}>
      <input type = "submit" value= "Continue" 
      className= {styles.login}
      />
    </div>
             

             </div>
             
             </div>
             </>
             )}
             {steps === 2 && (
              <>
              <div className= {styles.setupBodyContainer}>
            <div className= {styles.setupBody}>
             <h1>Choose your goals</h1>
             <p>Please tell us what you hope to achieve on this app. This will help us personalize your experience.</p>
             </div>
             <div className= {styles.inputFieldsSetup}>
              <h1>Select your Goals</h1>
              <div className= {styles.buttonContainer}>
               <button type="button"
               className= {styles.buttonGoals}>Cancel Subscriptions</button>
                 <button type="button"
               className= {styles.buttonGoals}>Lower My Bills</button>
                 <button type="button"
               className= {styles.buttonGoals}>Track My Spending</button>
                 <button type="button"
               className= {styles.buttonGoals}>Create a Budget</button>
                <button type="button"
               className= {styles.buttonGoals}>Save For My Future</button>
                <button type="button"
               className= {styles.buttonGoals}>Invest In Retirement</button>
                <button type="button"
               className= {styles.buttonGoals}>Other</button>
                <button type="button"
               className= {styles.buttonGoals}>No Particular Reason</button>
               </div>
                 <div className= {styles.inputFieldsSetup2}>
      <input type = "submit" value= "Continue" 
      className= {styles.login}
      />
    </div>
    </div>
             

             </div>
             
              </>
             )}
             {
              steps === 3 && (
                <>
                <div className= {styles.setupBodyContainer}>
              <div className= {styles.setupBody}>
               <h1>Link Your Account</h1>
               <p>Now lets start achieving your goals! Linking your account will help us get you to your goals</p>
               </div>
               <div className= {styles.inputFieldsSetup}>
               <h1>Link Your Bank Account</h1>
       <button onClick={() => open()} disabled = {!ready}>
        Connect a bank account
       </button>
                   <div className= {styles.inputFieldsSetup2}>
        <input type = "submit" value= "Continue" 
        className= {styles.login}
        />
      </div>
      </div>
               
  
               </div>
               
                </>
               )}
             
             </form>
             </div>
             
            </div>
            
            </div>
            
            </div>
            
            </div>
    )
}

export default Setup2