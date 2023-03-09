-- SCRIPTS THAT LISTS ALL BANDS WITH 'Glam Rock' AS THEIR MAIN STYLE, RANKED BY THEIR LONGETIVITY
SELECT band_name, YEAR(NOW()) - formed AS lifespan FROM metal_bands where style LIKE '%Glam rock%' ORDER BY lifespan DESC;
