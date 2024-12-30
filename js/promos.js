// Fetch data from Airtable
fetch('https://api.airtable.com/v0/appoKqr1ahzqCawxQ/Promotions', {
    headers: {
      Authorization: `Bearer patAh6aeefiiuYQMm.accc27e5ed6e218ab715843d1e9382ff50dabe87e00e7ac1c407644f709ca62c`,  // Replace with your Airtable API key
    },
})
.then(response => {
    console.log('API response status:', response.status); // Log the status of the response
    return response.json();
  })
  .then(data => {
    console.log('Data fetched from Airtable:', data); // Log the fetched data
  
    // Check if the records array exists and has data
    if (data.records && data.records.length > 0) {
      const promotions = data.records;
  
      // Iterate over each promotion and create a new section
      promotions.forEach(promoData => {
        const promo = promoData.fields;

        if (!promo) {
            console.error('Missing promotion fields for record:', promoData);
            return;
          }
        else{
            console.log("this is the promos:",promoData)
        }
        console.log(promo.Title)
  
        // Create a new section for each promotion
        const promoSection = document.createElement('section');
        promoSection.classList.add('ftco-section');
        promoSection.style.padding = '0'; 
        promoSection.innerHTML = `
        <div class="container" style="margin-top: 20px;">
            <!-- Title Section -->
            <div class="row justify-content-center pb-2"> <!-- Reduced padding-bottom -->
            <div class="col-lg-7 text-center">
                <h2 class="subheading" style="color: crimson;">${promo.Title || 'No title available'}</h2>
                <p style="color: #333; font-size: 1.2rem;">${promo.Subtitle || 'No description available'}</p>
            </div>
            </div>
            <!-- Content Section -->
            <div class="row">
            <!-- Text Content -->
            <div class="col-md-6" style="margin-bottom:10px">
                <p style="font-size: 1rem; line-height: 1.6;">${promo.Description || 'No promo text available'}</p>
                <h4 style="color: crimson; margin-top: 20px;">${promo.Name || 'No promotion name available'}</h4>
                <p style="font-size: 1.2rem; color: #333;">Price: $${promo.Price || 'N/A'}</p>
                <a style="float: none;" target="_blank" href="${promo.Link || '#'}">
                    <img 
                        border="none" 
                        src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" 
                        alt="Book an appointment with Paul M using Setmore" 
                    />
                </a>
            </div>
            <!-- Image Content -->
            <div class="col-md-6">
                <img 
                src="${promo.Image && promo.Image.length > 0 ? promo.Image[0].url : 'default-image-url'}" 
                alt="Promotions" 
                class="img-fluid" 
                style="border-radius: 40px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); min-height: 60vh !important;">
            </div>
            </div>
            <!-- Divider Line -->
            <hr style="border: 1px solid #ddd; margin-top: 20px;"> <!-- Added a divider line -->
        </div>
        `;

      
        
  
        // Append the new section to the promotions-container
        document.querySelector('#promotions-container').appendChild(promoSection);
      });
    } else {
      console.error('No records found in the API response.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Log any errors
  });
