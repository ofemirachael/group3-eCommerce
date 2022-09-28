import React from 'react'
import Button from 'react-bootstrap/Button'
import './profile.css'
import { Link } from 'react-router-dom'


const Profile = () => {
  const options = [
    {
      label: 'Please Select',
      value: 'select',
    },
    {
      label: 'Abia',
      value: 'abia',
    },
    {
      label: 'Adamawa',
      value: 'adamawa',
    },
    {
      label: 'Akwa-Ibom',
      value: 'akwa-ibom',
    },
    {
      label: 'Anambra',
      value: 'anambra',
    },
    {
      label: 'Bauchi',
      value: 'bauchi',
    },
    {
      label: 'Bayelsa',
      value: 'bayelsa',
    },
    {
      label: 'Benue',
      value: 'benue',
    },
    {
      label: 'Borno',
      value: 'borno',
    },
    {
      label: 'Cross River',
      value: 'cross river',
    },
    {
      label: 'Delta',
      value: 'delta',
    },
    {
      label: 'Ebonyi',
      value: 'ebonyi',
    },
    {
      label: 'Edo',
      value: 'edo',
    },
    {
      label: 'Ekiti',
      value: 'ekiti',
    },
    {
      label: 'Enugu',
      value: 'enugu',
    },
    {
      label: 'Gombe',
      value: 'gombe',
    },
    {
      label: 'Imo',
      value: 'imo',
    },
    {
      label: 'Jigawa',
      value: 'jigawa',
    },
    {
      label: 'Kaduna',
      value: 'kaduna',
    },
    {
      label: 'Kano',
      value: 'kano',
    },
    {
      label: 'Katsina',
      value: 'katsina',
    },
    {
      label: 'Kebbi',
      value: 'kebbi',
    },
    {
      label: 'Kogi',
      value: 'kogi',
    },
    {
      label: 'Kwara',
      value: 'kwara',
    },
    {
      label: 'Lagos',
      value: 'lagos',
    },
    {
      label: 'Nasarawa',
      value: 'nasarawa',
    },
    {
      label: 'Niger',
      value: 'niger',
    },
    {
      label: 'Ogun',
      value: 'ogun',
    },
    {
      label: 'Ondo',
      value: 'ondo',
    },
    {
      label: 'Osun',
      value: 'osun',
    },
    {
      label: 'Oyo',
      value: 'oyo',
    },
    {
      label: 'Plateau',
      value: 'plateau',
    },
    {
      label: 'Rivers',
      value: 'rivers',
    },
    {
      label: 'Sokoto',
      value: 'sokoto',
    },
    {
      label: 'Taraba',
      value: 'taraba',
    },
    {
      label: 'Yobe',
      value: 'yobe',
    },
    {
      label: 'Zamfara',
      value: 'zamfara',
    },
  ]

  return (
    <main className="profile-body below-header">
      <div className="profile-container">
        <h1> User's Profile</h1>
        <p className="profile-span">
          if you are a new memeber or dont have an account kindly create a new
          account
          <p className="">
            {'Already have an account, '}

            <Link to="/account" className="profile-link">
              Please login.
            </Link>
          </p>{' '}
        </p>

        <form action="">
          <div className="profile-name">
            <label for="FirstName" className="profile-input-name">
              First Name
            </label>
          </div>
          <p />
          <input
            className="profile-input"
            type="text"
            name="FirstName"
            value=""
            placeholder=""
          />
          <p />
          <div className="profile-name">
            <label for="FirstName" className="profile-input-name">
              Last Name
            </label>
          </div>
          <p />
          <input
            className="profile-input"
            type="text"
            name="LastName"
            value=""
            placeholder=""
          />
          <p />
          <div className="profile-radio">
            <input type="radio" id="radio1" name="gender" value="Male" />
            <label className="profile-label">Male</label>
            <input type="radio" id="radio2" name="gender" value="Female" />
            <label className="profile-label">Female</label>
          </div>
          <p />
          <div className="profile-name2">
            <label for="FirstName" className="">
              Email
            </label>
          </div>
          <p />
          <input
            className="profile-input"
            type="text"
            name="email"
            value=""
            placeholder=""
          />
          <p />
          <div className="profile-row">
            <div className="profile-column">
              <label for="FirstName" className="">
                Contact
              </label>
              <br />

              <input
                id="contact"
                className="profile-contact"
                type="tel"
                name="tel"
                placeholder="+234"
              />
            </div>

            <div className="profile-column">
              <label for="FirstName" className="">
                State
              </label>
              <br />

              <div>
                <select className="profile-select">
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <p />
          <div className="profile-name">
            <label for="FirstName" className="profile-input-name">
              Address
            </label>
          </div>
          <p />
          <input
            className="profile-input"
            type="adress"
            name="adress"
            value=""
            placeholder=""
          />
          <p />
          <p />
          <p />
          <p />
          <div className="profile-terms">
            <input
              id="terms"
              className=""
              type="checkbox"
              name="terms"
              value=""
            />
            &nbsp; I agree with <a href="">Terms and Conditions</a>
          </div>

          <Button
            className="profile-login"
            size=""
            variant="primary"
            style={{ border: 'none' }}
          >
            Create
          </Button>
          <p />
        </form>
      </div>
    </main>
  )
}

export default Profile
