import React from 'react'
import './home.css'

function Home() {
  return (
    <>
     
<table class="dataTable">
    <thead>
        <tr>
            <th>Numbers</th>
            <th>Names</th>
            <th>Values</th>
            <th>Dates</th>
            <th>Cash Money</th>
            <th>Messages</th>
            <th>Buttons</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">000000001</a></td>
            <td>Dr. Jayhawk</td>
            <td>102</td>
            <td>03/30/1940</td>
            <td>$60.42</td>
            <td>PAID</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
        <tr>
            <td><a href="#">000000002</a></td>
            <td>Dr. Jayhawk</td>
            <td>137</td>
            <td>03/18/1953</td>
            <td>$69.68</td>
            <td>PAID</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
        <tr>
            <td><a href="#">000000003</a></td>
            <td>Dr. Wolverine Longer Text Test</td>
            <td>154</td>
            <td>03/29/1976</td>
            <td>$86.68</td>
            <td>PAID</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
        <tr>
            <td><a href="#">000000004</a></td>
            <td>Dr. Tarheel</td>
            <td>113</td>
            <td>03/30/1981</td>
            <td>$63.50</td>
            <td>PAID</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
        <tr>
            <td><a href="#">000000005</a></td>
            <td>Dr. Orange</td>
            <td>147</td>
            <td>03/30/1987</td>
            <td>$74.73</td>
            <td>PAID</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
        <tr>
            <td><a href="#">000000006</a></td>
            <td>Dr. Who</td>
            <td>000</td>
            <td>04/08/2013</td>
            <td>$0.00</td>
            <td>PENDING</td>
            <td>
                <button class="button action">Select</button>
            </td>
        </tr>
    </tbody>
</table>


    </>
  )
}

export default Home
