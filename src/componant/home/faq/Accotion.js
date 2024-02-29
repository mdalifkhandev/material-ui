import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

const Accotion = ({dt}) => {
    const {name,text}=dt
    return (
        <div>
              <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          {text}
          </AccordionDetails>
      </Accordion>
        </div>
    );
};

export default Accotion;