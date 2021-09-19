import { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BlockIcon from "@material-ui/icons/Block";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import DoneAllIcon from "@material-ui/icons/DoneAll";
function ScheduleDiv({ e, divData }) {
  const [showHover, setShowHover] = useState(false);
  const types = {
    booked: {
      color: "blue",
      hex: "20,20,255",
      icon: (
        <CheckCircleIcon
          style={{ color: "blue", background: "white", borderRadius: 30 }}
        />
      ),
    },
    cancelled: {
      color: "red",
      hex: "255,20,20",
      icon: (
        <CancelIcon
          style={{ color: "red", background: "white", borderRadius: 30 }}
        />
      ),
    },
    unavailable: {
      color: "gray",
      hex: "90,90,90",
      icon: (
        <BlockIcon
          style={{ color: "gray", background: "white", borderRadius: 30 }}
        />
      ),
    },
    available: {
      color: "green",
      hex: "20,255,20",
      icon: (
        <EventAvailableIcon
          style={{ color: "green", background: "white", borderRadius: 30 }}
        />
      ),
    },
    completed: {
      color: "gray",
      hex: "50,50,50",
      icon: (
        <DoneAllIcon
          style={{ color: "gray", background: "white", borderRadius: 30 }}
        />
      ),
    },
  };
  const mainScheduleCardStyle = {
    display: "inline-block",
    position: "relative",
    height: divData?.height + 20 || 100,
  };
  const subScheduleCardStyle = {
    display: "inline-block",
    width: divData.width || 100,
    height: divData?.height + 20 || 100,
    position: "absolute",
  };
  const innerScheduleCardStyle = {
    display: "flex",
    width: (divData.width || 100) - 30,
    height: divData?.height - divData?.margin * 2 || 100,
    margin: divData?.margin,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",

    padding: 10,
  };

  const scheduleTextStyle = {
    width: "70%",
    margin: 0,
  };
  const iconStyle = {
    margin: 0,
    // width: 1,
    marginTop: 10,
  };
  return (
    <div
      style={mainScheduleCardStyle}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <div
        style={{
          ...subScheduleCardStyle,
          left: e?.time * divData.width || 0,
        }}
      >
        <div
          style={{
            ...innerScheduleCardStyle,
            border:
              "2px solid " +
                ("rgb(" + types[e?.status]?.hex + ")" ||
                  types[e?.status]?.hex) || "#f00",
            background: "rgba(" + types[e?.status]?.hex + ",.3)",
          }}
        >
          <p style={scheduleTextStyle}>
            Client: {e?.client?.name || "undefined"}
          </p>
          <p style={iconStyle}>{types[e?.status]?.icon || <CancelIcon />}</p>
          {showHover ? (
            <div
              style={{
                // display: "flex",
                position: "absolute",
                // height: 100,
                minHeight: "fit-content",
                width: divData?.width || 200,
                alignItems: "center",
                justifyContent: "center",
                zIndex: 4,
                background: "#fff",
                left: 20,
                top: divData?.height + 15 || 100,
                paddingLeft: 10,
                borderRadius: 10,
              }}
            >
              <h4 style={{ margin: 5 }}>
                Client: {e?.client?.name || "undefined"}
              </h4>
              <p style={{ margin: 5 }}>
                SessionType: {e?.client?.sessionType || "undefined"}
              </p>
              {e?.status == "cancelled" ? (
                <p>Cancelled By: {e?.cancelledBy}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ScheduleDiv;
