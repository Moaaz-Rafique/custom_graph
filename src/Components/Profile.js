import ScheduleDiv from "./ScheduleDiv";

function Profile({ i, profile, divData }) {
  const tempSchedule = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
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
        //   if()
        return <ScheduleDiv e={e} divData={divData} />;
      })}
    </div>
  );
}
export default Profile;
