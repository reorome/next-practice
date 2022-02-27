import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Layout from '@/components/layout';
// import useSWR from 'swr';
// import ApiCalendar from 'react-google-calendar-api';
import { useEffect } from 'react';

// const googleMyEvent = () => {};

// const componentDidMount = () => {
//   const script = document.createElement('script');
//   script.src = 'https://apis.google.com/js/api.js';
//   script.async = true;
//   document.body.appendChild(script);
// };

const SampleCalendar = () => {
  return (
    <Layout>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locale='ja'
        initialEvents={[{ title: 'initial event', start: new Date() }]}
      />
      {/* <button onClick={() => getEvents()}>Get Events</button> */}
    </Layout>
  );
};

export default SampleCalendar;
