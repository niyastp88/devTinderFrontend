import React, { useState } from "react";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">FirstName</legend>
              <input
                type="text"
                value={firstName}
                className="input"
                placeholder="Type here"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                value={lastName}
                className="input"
                placeholder="Type here"
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Photo URL</legend>
              <input
                type="text"
                value={photoUrl}
                className="input"
                placeholder="Type here"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="password"
                value={age}
                className="input"
                placeholder="Type here"
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Gender</legend>
              <input
                type="text"
                value={gender}
                className="input"
                placeholder="Type here"
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">About</legend>
              <input
                type="text"
                value={about}
                className="input"
                placeholder="Type here"
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
