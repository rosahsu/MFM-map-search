# Code4Good--Mass-Farmers-Market

This project was created in affiliation with MIT Code4Good, an organization that pairs MIT students with local nonprofits that require their technological skills. Our nonprofit, Mass Farmers Markets, partners with farmers, consumers, and communities to improve the health of individuals, strengthen community vitality, and enhance local farm viability through farmers markets. They required both consulting advice on how to revamp their database and an interactive presentable map that helps consumers search for farmers markets in their area. This GitHub repository contains all the relevant code regarding the interactive map, including instructions on how to update it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
A Google API Key (if you don't have one already, here are instructions: https://developers.google.com/maps/documentation/javascript/get-api-key, Make sure the Maps Javascript API is enabled)
Python IDE (for editing)
### Set-up/Usage

1. Download all the files from the GitHub/clone the repository to a local directory. See https://help.github.com/articles/cloning-a-repository/ for help.

2. Open map.html

3. Copy paste your API Key into Google callback script
  ```
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
  </script>
  ```
 4. To see the pretty map on display, run map.html


### Adding New Data for Buttons
1. Open dataset.csv.

2. Add a new column with the name of the button. For example, if you would like to add a column to indicate whether the farmer’s market sells baked goods, you might add the column ‘Baked_Goods’.

3. For each row (an individual farmer’s market) add a 1 if the column is true for that market (for example, add a 1 if it is true that that market sells baked goods). Add a 0 if that column is false for that market (for example, if that market does not sell baked goods).

4. Make sure to save the file with the exact same name (dataset.csv), as this is the name the code will look for.

### Adding New Farmers Markets
1. Open dataset.csv.

2. Add a new line at the bottom with the name of the farmer’s market and fill out the corresponding columns.

3. Make sure to save the file with the exact same name (dataset.csv), as this is the name the code will look for.


### Adding Buttons
 1. Open the file map.html
 2. At line 120, you will see a placeholder for adding new buttons. Copy the following code and follow the steps for modification (also included below).

```
<!-- Adding a new set of buttons instructions

      STEP ONE: Copy the following code: -->

      <h2 class="filter-header">   What products are you looking for? </h2> <!-- STEP TWO: Edit this header text to indicate what the filter does -->

      <div class="row">
          <div class="col-md-1">
              <!-- STEP THREE: edit the id (here it is "Bread") so that it matches exactly the column name in the dataset. Make sure to keep it in quotations. -->
              <input type="checkbox" data-toggle="toggle" id="Bread" onchange=filter(this) data-on=" " data-off=" " data-style="ios"  >
              <!--  STEP FOUR: edit the for (here it is "Bread") so that it matches exactly the column name in the dataset & the name you just put into id. Make sure to keep it in quotations -->
              <label class="form-check-label" for="Bread">
              <!--  STEP FIVE: edit the name of the button which will be displayed on the website. This can be whatever you want. Here it is Bread. -->
                  Bread
              </label>
          </div>

        <!--  STEP SIX: Repeat for as many buttons as you want -->

          <div class="col-md-1">
              <input type="checkbox" data-toggle="toggle" id="Dairy" onchange=filter(this) data-on=" " data-off=" " data-style="ios"  >
              <label class="form-check-label" for="Dairy">
                  Dairy
              </label>
          </div>
        </div>

<!-- end of instructions -->

 ```

 3. Modify the header. Here it says ‘What products are you looking for?’
 4. Modify the button ‘id’. Here it is “Bread”. Change it to exactly match the name of the column in the dataset.
 5. Modify the button ‘for’. This should also match exactly the name of the column in the dataset.
 6. Modify the button label. This will be what appears on the web site.

 ### Changing Color Scheme
 1. Open the file ‘style.css’ in the folder ‘style’
 2. Modify the following code at the top of the screen:
```
  :root {
    --main-color: #0da4d3;
	  --main-color-dark: #0c99c6;
	  --secondary-color: #aaa;
	  --main-font: 'Bitter', serif;
  }
```
 3. The colors are represented by hex codes (for example, #0da4d3 is this shade of blue). You can change the hex codes to match whatever color scheme you choose. For example, if you want a purple color scheme, you can change --main-color: #0da4d3 to be --main-color: #8e44ad.
 4. You can also change the font by modifying the --main-font variable.
 5. This is a useful website for picking color schemes and hex codes: https://flatuicolors.com/.

### Changing the marker icon
 1. Choose your new icon and copy it into the folder ‘img’. Make sure the icon size is the size you would like it to appear on the map.
 2. Open the file map.html.
 3. In lines 341 to 349 you will see the following code:
```
function createMarkers(){
    	for (var i = 0; i < data.length; i++) {
        	data[i].Latitude != 0 && data[i].Longitude != 0
        	var location = {lat: data[i].Latitude, lng: data[i].Longitude}; //Gets location of each farmer's market
        	var marker = new google.maps.Marker({
            	position: location,
            	map: map,
            	icon: "img/icon-blue.png"}) //Creates a marker and places it on the map
        	markers.push(marker);
```
4. Change the ‘img/icon-blue.png’ to whatever the name of your new icon is. For example, ‘img/new-icon.png’.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
