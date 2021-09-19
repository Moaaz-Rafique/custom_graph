import logo from "./logo.svg";
import "./App.css";
import ScheduleDiv from "./Components/ScheduleDiv";
import Profile from "./Components/Profile";

function App() {
  const data = [
    {
      data: {
        name: "Ali",
        location: "Karachi",
      },
      schedule: [
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 1,
          status: "booked",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 2,
          status: "unavailable",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 4,
          status: "available",
        },
      ],
    },
    {
      data: { name: "Jawad", location: "Karachi" },
      schedule: [
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 2,
          width: 400,
          background: "#0f0",
          status: "cancelled",
          cancelledBy: "Client",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 6,
          status: "unavailable",
        },
      ],
    },
    {
      data: { name: "Usman", location: "Karachi" },
      schedule: [
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 0,
          status: "cancelled",
          cancelledBy: "Admin",
        },
      ],
    },
    {
      data: {
        name: "Ali",
        location: "Karachi",
      },
      schedule: [
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 1,
          status: "booked",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 2,
          status: "unavailable",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 4,
          status: "available",
        },
      ],
    },
    {
      data: {
        name: "Ali",
        location: "Karachi",
      },
      schedule: [
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 0,
          status: "booked",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 1,
          status: "unavailable",
        },
        {
          client: {
            name: "Zaalim",
            reason: "death",
            sessionType: "3",
          },
          time: 5,
          status: "available",
        },
      ],
    },
  ];
  const divData = {
    height: 40,
    margin: 3,
    width: 200,
  };
  const mainDivStyle = {
    height: 600,
    margin: 20,
    padding: 10,
    minWidth: "fit-content",
    border: "none",
    borderLeft: "1px dashed black",
    borderBottom: "1px dashed black",
    background: "#f0f0f0",
    overflow: "auto",
  };

  const headerStyle = {
    width: divData?.width - divData?.margin || 100,
    fontSize: 20,
    display: "inline-block",
    textAlign: "center",
    padding: "20px 0px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={mainDivStyle}>
      <div
        style={{
          height: 100,
          overflow: "hidden",
          // , wrap: "no-wrap"
        }}
      >
        <p style={{ ...headerStyle, width: 150 }}>Doctor Name</p>
        <p style={headerStyle}>10:00</p>
        <p style={headerStyle}>11:00</p>
        <p style={headerStyle}>12:00</p>
        <p style={headerStyle}>13:00</p>
        <p style={headerStyle}>14:00</p>
        <p style={headerStyle}>15:00</p>
        <p style={headerStyle}>16:00</p>
        <p style={headerStyle}>17:00</p>
      </div>
      {data.map((profile, i) => {
        return <Profile profile={profile} key={i} i={i} divData={divData} />;
      })}
    </div>
  );
}

export default App;
