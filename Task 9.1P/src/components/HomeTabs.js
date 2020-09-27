import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../components/ExperienceCards';


function HomeTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >How it works</Tab>
      <Tab >Requesters</Tab>
      <Tab >Pricing</Tab>
      <Tab >About</Tab>
     <Tab >Sign In</Tab>
    </TabList>

    <TabPanel>
    <div> <h3>iCrowd is a web application developed in react framework,it has 3 portal
a mess manager,a clustering algorithm portal and a prediction tool that
work together to provide better efficiency!</h3></div>

    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <div>The app is a saas application
we charge a small fee every single month of $20!</div>
    </TabPanel>
    <TabPanel>
      <div>
<h6>we are group of dedicated developers who
have made their mandate to deliver bespoke and excellent business solutions,help easen the ordering process in the mess and to make it more efficient. Built with proper 
              authetication to ensure only the residents have the access to it.

</h6></div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;