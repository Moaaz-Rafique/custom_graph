import ScheduleDiv from "./ScheduleDiv";

function Profile({ i, profile, divData }) {
  const availableSchedule = {
    // time: 1,
    status: "available",
    onClick: () => {
      alert("this slot is available");
    },
  };
  const tempSchedule = [
    { ...availableSchedule, time: 0 },
    { ...availableSchedule, time: 1 },
    { ...availableSchedule, time: 2 },
    { ...availableSchedule, time: 3 },
    { ...availableSchedule, time: 4 },
    { ...availableSchedule, time: 5 },
    { ...availableSchedule, time: 6 },
    { ...availableSchedule, time: 7 },
  ];
  const mainRowStyle = {
    display: "inline-block",
    position: "relative",
    height: divData?.height || 100,
    width: 150,
    overflow: "hidden",
    textAlign: "center",
  };

  return (
    <div
      key={i}
      style={{
        width: "100%",
        // height: divData?.height + divData?.margin || 105,
        borderBottom: "1px dashed #bbb",
        // overflow: "hidden",
      }}
    >
      <div style={mainRowStyle}>
        <p style={{ marginTop: -5 }}>
          <span
            style={
              {
                // fontSize: "20px"
              }
            }
          >
            {profile?.data?.name}
          </span>
          <br />
          {profile?.data?.location}
        </p>
      </div>
      {tempSchedule?.map((e, j) => {
        const temp = profile.schedule.find((v) => v.time == e.time);
        if (temp) {
          return <ScheduleDiv e={temp} divData={divData} />;
        }
        return <ScheduleDiv e={e} divData={divData} />;
      })}
    </div>
  );
}
export default Profile;
