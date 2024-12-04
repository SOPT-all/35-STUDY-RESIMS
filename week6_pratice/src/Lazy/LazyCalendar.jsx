import { useState, lazy, Suspense } from "react";
import "react-datepicker/dist/react-datepicker.css";

const LazyDatePicker = lazy(() => import("react-datepicker"));

const preloadDatePicker = () => {
  import("react-datepicker");
};

const LazyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "ceter",
        marginBottom: "300px",
        
      }}
    >
      <h1
        onClick={() => setShowDatePicker(true)}
        onMouseEnter={preloadDatePicker}
        style={{
          cursor: "pointer",
          color: showDatePicker ? "gray" : "black",
          width: "500px",
        }}
      >
        클릭하면 캘린더를 사용할 수 있습니다.
      </h1>

      {showDatePicker && (
        <Suspense fallback={<p>Loading DatePicker...</p>}>
          <LazyDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select a date"
            minDate={new Date()}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
          />
        </Suspense>
      )}

      {selectedDate && (
        <p style={{ marginTop: "20px" }}>
          Selected Date and Time:{" "}
          <strong>{selectedDate.toLocaleString()}</strong>
        </p>
      )}
    </div>
  );
};

export default LazyCalendar;
