import React from 'react';
import './styles.css';

const PhoneBook = ({ phoneBookEntry }) => (
  <div className="phoneBookContainer">
    <table>
      <thead>
        <tr>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            Phone Number
          </th>
        </tr>
      </thead>
      <tbody>
        {
          phoneBookEntry.map((entry, index) => (
            <tr key={index}>
              <td>
                {entry.firstName}
              </td>
              <td>
                {entry.lastName}
              </td>
              <td>
                {entry.phoneNumber}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default PhoneBook;
