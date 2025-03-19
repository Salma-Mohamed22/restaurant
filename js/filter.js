document.addEventListener("DOMContentLoaded", () => {
    // Function to handle range slider logic
    let setupRangeSlider = (slider, sliderLabel, validSteps) => {
      if (!slider || !sliderLabel) return;
  
      // Function to update the slider background gradient
      let updateSliderBackground = () => {
        let min = parseFloat(slider.min);
        let max = parseFloat(slider.max);
        let value = parseFloat(slider.value);
  
        // Calculate the percentage of the slider's progress
        let percentage = ((value - min) / (max - min)) * 100;
  
        // Update the background with a gradient
        slider.style.background = `linear-gradient(to right, #00c5c5 ${percentage}%, #ddd ${percentage}%)`;
      };
  
      // Add event listener for the slider input
      slider.addEventListener("input", (e) => {
        let sliderValue = parseInt(e.target.value, 10);
        let closestValue = validSteps.reduce((prev, curr) =>
          Math.abs(curr - sliderValue) < Math.abs(prev - sliderValue) ? curr : prev
        );
        slider.value = closestValue; // Snap to the closest valid value
        sliderLabel.innerText = `${closestValue}%`;
        updateSliderBackground(); // Update gradient color
      });
  
      // Initialize the slider background on load
      updateSliderBackground();
    };
  
    // Function to handle apply and reset logic for dropdown filters
    let setupDropdownFilter = (dropdown) => {
      let dropdownToggle = dropdown.querySelector(".dropdown-toggle");
      let dropdownMenu = dropdown.querySelector(".dropdown-menu");
      let applyButton = dropdown.querySelector(".primary-btn");
      let resetButton = dropdown.querySelector(".secondary-btn");
      let discountSlider = dropdown.querySelector("#discount-slider");
      let sliderValueLabel = dropdown.querySelector("#slider-value");
  
      let defaultDropdownText = dropdownToggle.innerHTML; // Store default text
  
      applyButton.addEventListener("click", () => {
        let dropdownName = dropdownToggle.querySelector("span");
        let newText = "";
  
        if (discountSlider) {
          // If it's a discount range filter
          newText = `${discountSlider.value}%`;
        } else {
          // If it's a "Sort by" filter (radio buttons)
          let selectedOption = dropdown.querySelector("input[type='radio']:checked + label");
          if (selectedOption) {
            newText = `Sort by : ${selectedOption.innerText.trim()}`;
            // newText.innerText = `Sort by : ${selectedOption.innerText.trim()}`;
          }
        }
  
        // Change text if an option is selected
        if (newText) {
          dropdownName.innerHTML = newText;
          dropdown.classList.add("checked");
        }
  
        // Close the dropdown menu
        dropdownMenu.classList.remove("show");
      });
  
      resetButton.addEventListener("click", () => {
        // Reset dropdown text to default
        dropdownToggle.innerHTML = defaultDropdownText;
        dropdown.classList.remove("checked");
        if (discountSlider) {
          // Reset slider to default value (25%)
          discountSlider.value = 25;
          sliderValueLabel.innerText = "25%";
        } else {
          // Reset radio buttons (clear selection)
          const selectedRadio = dropdown.querySelector("input[type='radio']:checked");
          if (selectedRadio) {
            selectedRadio.checked = false;
          }
        }
      });
  
      // Stop dropdown menu from closing when interacting inside
      dropdownMenu.addEventListener("click", (e) => e.stopPropagation());
    };
  
    // Initialize dropdowns and sliders
    let dropdowns = document.querySelectorAll(".filter_item");
    dropdowns.forEach((dropdown) => {
      let discountSlider = dropdown.querySelector("#discount-slider");
      let sliderValueLabel = dropdown.querySelector("#slider-value");
      let validSteps = [15, 25, 50, 70, 90]; // Define snapping steps
  
      // Initialize range slider (if present)
      if (discountSlider) {
        setupRangeSlider(discountSlider, sliderValueLabel, validSteps);
      }
  
      // Initialize dropdown filter
      setupDropdownFilter(dropdown);
    });

    
    let sliders = document.querySelectorAll(".slider");
    
    sliders.forEach(slider => {
        function updateSliderBackground() {
            let min = slider.min;
            let max = slider.max;
            let value = slider.value;
            let percentage = ((value - min) / (max - min)) * 100;
        
            slider.style.background = `linear-gradient(to right, #00c5c5 ${percentage}%, #ddd ${percentage}%)`;
          }
        
          slider.addEventListener("input", updateSliderBackground);
          updateSliderBackground(); // Initialize on load
    })

    

  });
