import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
     <div className="form-group">
       <label htmlFor="exampleInputEmail1">Search Term</label>
       <input
        type="text"
        className="form-control"
        id="searchTerm"
        placeholder="Search Article"
        onChange={props.handleSearchChange}
        value={props.searchTerm}
      />
     </div>
     <div className="form-group">
      <label htmlFor="exampleInputPassword1">Number of Records</label>
      <select value={props.records} onChange={props.handleRecordChange} className="form-control">
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>

     </div>
     <div className="form-group">
       <label htmlFor="exampleInputEmail1">Start Year(Optional)</label>
       <input
        type="number"
        className="form-control"
        id="startYear"
        placeholder="Start Year"
        onChange={props.handleStartYearChange}
        value={props.startYear}
        />
     </div>
     <div className="form-group">
       <label htmlFor="exampleInputEmail1">End Year(Optional)</label>
       <input
         type="number"
          className="form-control"
          id="endYear"
          placeholder="End Year"
          onChange={props.handleEndYearChange}
          value={props.endYear}
        />
     </div>
     <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

export default Form;
