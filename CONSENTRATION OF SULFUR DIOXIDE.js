//CONSENTRATION OF SULFUR DIOXIDE USING SENTINEL-5P IN GOOGLE EARTH ENGINE

var SO2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")

var image = SO2.filterDate ('2024-01-01' , '2024-05-30')
          .select('SO2_column_number_density')
          .mean()
          .clip(AOI)
          
var band_viz = {
  min: 0.0,
  max: 0.0005,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

Map.addLayer (image, band_viz)
Map.centerObject (AOI, 10)

// Create the legend panel
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});

// Create the legend title with unit
var legendTitle = ui.Label({
  value: 'SO₂ Column Density (mol/m²)',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 4px 0',
    padding: '0'
  }
});
legend.add(legendTitle);

// Define palette and corresponding ranges
var palette = ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'];
var min = 0.0;
var max = 0.0005;
var numSteps = palette.length;
var stepSize = (max - min) / numSteps;

// Add color boxes with labels
for (var i = 0; i < numSteps; i++) {
  var from = (min + i * stepSize).toFixed(6);
  var to = (min + (i + 1) * stepSize).toFixed(6);
  
  // Create a color box
  var colorBox = ui.Label({
    style: {
      backgroundColor: palette[i],
      padding: '8px',
      margin: '0 0 4px 0'
    }
  });
  
  // Create a label for the range
  var description = ui.Label({
    value: from + ' - ' + to,
    style: {margin: '0 0 4px 6px'}
  });
  
  // Combine color box and label
  var legendItem = ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
  
  legend.add(legendItem);
}

// Add the legend to the map
Map.add(legend);



// Export the mean SO2 image to Google Drive
Export.image.toDrive({
  image: image,
  description: 'SO2_Average_Jan_May_2024',
  region: AOI,
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
