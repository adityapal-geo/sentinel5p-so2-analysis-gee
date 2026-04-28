# sentinel5p-so2-analysis-gee

Sulfur Dioxide (SO₂) concentration mapping using Sentinel-5P in Google Earth Engine


## Overview

This project maps atmospheric Sulfur Dioxide (SO₂) concentration using Sentinel-5P satellite data in Google Earth Engine (GEE).

## Dataset Used

* Sentinel-5P OFFL L3 SO₂
* Band: `SO2_column_number_density`
* Unit: mol/m²

## Study Period

January 2024 – May 2024

## Methodology

* Filter ImageCollection by date
* Compute mean SO₂ concentration
* Clip to Area of Interest (AOI)
* Visualize using custom color palette
* Add legend for interpretation
* Export final raster to Google Drive

## Visualization

Color palette:
Black → Blue → Purple → Cyan → Green → Yellow → Red
(Low → High SO₂ concentration)

## Output

* Mean SO₂ concentration raster
* Exported as GeoTIFF (EPSG:4326)

## Code Features

* Custom legend UI panel
* Scalable visualization
* Ready for research and reporting

## How to Use

1. Open Google Earth Engine Code Editor
2. Define your AOI
3. Paste the script
4. Run the code
5. Export results

## Applications

* Air pollution monitoring
* Industrial emission analysis
* Environmental impact assessment

## Author

Aditya Pal
