import { useState } from "react";
import { Container, FormCalculator } from "./styles";

export function CaloriesCalculator() {
  const [og, setOg]             = useState(0);
  const [fg, setFg]             = useState(0);
  const [abv, setAbv]           = useState(0);
  const [calories, setCalories] = useState(0);

  function handleCalculateCalories(event) {
    event.preventDefault();

    var abv = ((og - fg) * 131.25);

    var calories_from_alcohol = (1881.22 * fg * (og - fg)) / (1.775 - og);
    var calories_from_carbohydrates = 3550 * fg * ((0.1808 * og) + (0.8192 * fg) - 1.0004);
    var calories = calories_from_alcohol + calories_from_carbohydrates;

    setCalories(calories);
    setAbv(abv);
  }

  return (
    <Container>
      <FormCalculator>
        <h1>Calculator</h1>

        <label>Original Gravity (og)</label>
        <input 
          min={0}
          type="number"
          onChange={event => setOg(event.target.value)}
        />

        <label>Final Gravity (fg)</label>
        <input 
          min={0}
          type="number"
          onChange={event => setFg(event.target.value)}
        />

        <button 
          type="submit" 
          onClick={handleCalculateCalories}>
          Calculate
        </button>

        <div>
          <span>Calculated ABV: <b>{Math.round(abv * 100) / 100}</b>%</span>
        </div>
        <div>
          <span>Calculated Calories: <b>{Math.round(calories * 100) / 100}</b> per 12oz bottle</span>
        </div>
      </FormCalculator>
    </Container>
  );
}