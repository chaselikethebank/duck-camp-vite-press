# Subscription Cost Calculator

This calculator helps you compute your ARR and Buyout value.

## Usage

Enter the following values to calculate the results:

- **Subscription Cost (Monthly)**
- **Number of Users**
- **Buyout Multiple**

<div>
  <h2>Subscription Cost Calculator</h2>
  
  <label for="monthlyCost">Subscription Cost (Monthly):</label>
  <input type="number" id="monthlyCost" placeholder="Enter subscription cost per user" required>

  <label for="numUsers">Number of Users:</label>
  <input type="number" id="numUsers" placeholder="Enter number of users" required>

  <label for="buyoutMultiple">Buyout Multiple:</label>
  <input type="number" id="buyoutMultiple" placeholder="Enter buyout multiple" required>

  <button id="calculateBtn">Calculate</button>

  <div class="result">
    <h3>Results</h3>
    <p><strong>ARR (Annual Recurring Revenue): $</strong> <span id="arrResult">0</span></p>
    <p><strong>Buyout Value (PE): $</strong> <span id="buyoutResult">0</span></p>
  </div>
</div>

<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    const button = document.getElementById('calculateBtn');
    if (button) {
      console.log('Button found'); // Verify button presence
      button.addEventListener('click', function () {
        console.log('clicked'); // Check if the event is triggered
        const monthlyCost = parseFloat(document.getElementById('monthlyCost').value);
        const numUsers = parseInt(document.getElementById('numUsers').value);
        const buyoutMultiple = parseFloat(document.getElementById('buyoutMultiple').value);

        if (isNaN(monthlyCost) || isNaN(numUsers) || isNaN(buyoutMultiple)) {
          alert("Please fill in all fields correctly.");
          return;
        }

        const arr = monthlyCost * numUsers * 12;
        const buyout = arr * buyoutMultiple;

        document.getElementById('arrResult').textContent = arr.toFixed(0);
        document.getElementById('buyoutResult').textContent = buyout.toFixed(0);
      });
    } else {
      console.log('Button not found');
    }
  });
</script>
