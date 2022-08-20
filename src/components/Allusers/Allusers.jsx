import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
    MDBCol,
  MDBContainer} from 'mdb-react-ui-kit';
import Fetchfunc from '../Fetch/Fetchfunc';
import Fetchclass from '../Fetch/Fetchclass';
import { Axios } from 'axios';
import Axiosfunc from '../Axios/Axiosfunc';
import Axiosclass from '../Axios/Axiosclass';

function Allusers() {
     const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value = "string") => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

    
  return (
   <MDBContainer>
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center fw-bold fs-4'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'} className='  fw-bold'>
                Fetch F-Component
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'} className='  fw-bold'>
              Fetch C-Component
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'} className='  fw-bold'
>
               Axios F-Component
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'} className='  fw-bold'
>
                Axios C-Component
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
                      <MDBTabsPane show={verticalActive === 'tab1'}>
                          <Fetchfunc />
                      </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}> <Fetchclass /> </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}><Axiosfunc /></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab4'}><Axiosclass /></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Allusers
