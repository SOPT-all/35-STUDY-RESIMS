import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
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
      <h1 onClick={() => setShowDatePicker(true)}>
        클릭하면 캘린더가 열립니다.
      </h1>

      {showDatePicker && (
        <DatePicker
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

export default Calendar;
