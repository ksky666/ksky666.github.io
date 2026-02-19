//vis1
const spec1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  data: { url: "./videogames_wide.csv" }, 

  transform: [
    { calculate: "toNumber(datum.Global_Sales)", as: "Global_Sales_num" },
  ],

  mark: "bar",

  encoding: {
    y: {
      field: "Genre",
      type: "nominal",
      sort: { op: "sum", field: "Global_Sales_num", order: "descending" },
      
      title: "Genre"
    },

    x: {
      field: "Global_Sales_num",
      type: "quantitative",
      aggregate: "sum",

      title: "Total Global Sales"
    },

    color: {
      field: "Platform",
      type: "nominal",
      title: "Platform"
    },

    tooltip: [
      { field: "Platform", type: "nominal", title: "Platform" },
      { field: "Global_Sales_num", aggregate: "sum", type: "quantitative", title: "Sales" },
    ]
  },

  width: 666,
  height: 375,
  title: "Global Sales by Genre and Platform"
};

vegaEmbed("#vis1", spec1);

// vis1-2 
const spec1_2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: { url: "videogames_wide.csv" },

  transform: [
    { calculate: "toNumber(datum.Global_Sales)", as: "Global_Sales_num" },


    {
      aggregate: [
        { op: "sum", field: "Global_Sales_num", as: "platform_sales" }
      ],
      groupby: ["Platform"]
    }
  ],

  mark: { type: "arc", outerRadius: 150 },

  encoding: {
    theta: {
      field: "platform_sales",
      type: "quantitative"
    },

    color: {
      field: "Platform",
      type: "nominal",
      title: "Platform"
    },

    tooltip: [
      { field: "Platform", type: "nominal" },
      { field: "platform_sales", type: "quantitative", title: "Total Sales " }
    ]
  },

  width: 350,
  height: 350,
};

vegaEmbed("#vis1_2", spec1_2);


//vis2-1
const spec2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { url: "videogames_wide.csv" },

  transform: [
    { calculate: "toNumber(datum.Year)", as: "Year_num" },

    {
      aggregate: [{ op: "sum", field: "Global_Sales", as: "total_sales" }],
      groupby: ["Year_num", "Genre"]
    }
  ],

  mark: { type: "line", point: true },

  encoding: {
    x: { field: "Year_num", 
        type: "quantitative", 
        title: "Year", 
        axis: { format: "d" } 
    },
    y: { field: "total_sales", 
        type: "quantitative", 
        title: "Total Global Sales (M)" 
    },
    color: { field: "Genre", 
        type: "nominal", 
        title: "Genre" 
    },

    tooltip: [
      { field: "Year_num", type: "quantitative", title: "Year" },
      { field: "Genre", type: "nominal", title: "Genre" },
      { field: "total_sales", type: "quantitative", title: "Total Sales " }
    ]
  },

  width: 666,
  height: 375,
 
};

vegaEmbed("#vis2", spec2);

// vis2-2
const spec2_2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { url: "videogames_wide.csv" },

  transform: [
    { calculate: "toNumber(datum.Year)",
         as: "Year_num" 
    },
    { filter: "isFinite(datum.Year_num)" },
    {
      aggregate: 
      [{ op: "sum",
         field: "Global_Sales", 
         as: "total_sales" 
        }],

      groupby: ["Year_num", "Platform"]
    },

  ],

  mark: { type: "line", point: true },

  encoding: {
    x: { 
        field: "Year_num", 
        type: "quantitative", 
        title: "Year", 
        axis: { format: "d" } },

    y: { 
        field: "total_sales", 
        type: "quantitative", 
        title: "Total Global Sales" },

    color: { 
        field: "Platform", 
        type: "nominal", 
        title: "Platform" 
    },

    tooltip: [
      { field: "Year_num", type: "quantitative", title: "Year" },
      { field: "Platform", type: "nominal", title: "Platform" },
      { field: "total_sales", type: "quantitative", title: "Total Sales" }
    ]
  },

  width: 666,
  height: 375,
  
};

vegaEmbed("#vis2_2", spec2_2);



//vis3
const TOP_N = 15;

const spec3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: { url: "videogames_wide.csv" },

  transform: [
    {
      fold: ["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"],
      as: ["Region", "Sales"]
    },

    { calculate: "toNumber(datum.Sales)", as: "Sales_num" },

    { filter: "isFinite(datum.Sales_num)" },

    {
      aggregate: [
        { op: "sum", field: "Sales_num", as: "region_sales" }
      ],

      groupby: ["Platform", "Region"]
    },

    {
      joinaggregate: [
        { op: "sum", field: "region_sales", as: "platform_total" }
      ],

      groupby: ["Platform"]
    },

    {
      window: [{ op: "rank", as: "rank" }],
      sort: [{ field: "platform_total", order: "descending" }]
    },

    { filter: `datum.rank <= ${TOP_N}` }
  ],

  mark: "bar",

  encoding: {
    x: {
      field: "Region",
      type: "nominal",
      axis: { labelAngle: -30 },
    },

    y: {
      field: "region_sales",
      type: "quantitative",
      stack: "zero",
      title: "Regional Sales",
    },

    color: {
      field: "Region",
      type: "nominal",
      title: "Region"
    },

    column: {
      field: "Platform",
      type: "nominal",
      title: null
    },

    //tooltip for each
    tooltip: [
      { field: "Platform", type: "nominal" },
      { field: "Region", type: "nominal" },
      { field: "region_sales", type: "quantitative", title: "Sales " },
    ]
  },

  width: 140,
  height: 160,
};

vegaEmbed("#vis3", spec3);

// vis4 
const spec4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { url: "./videogames_wide.csv" },

  transform: [
    { calculate: "toNumber(datum.NA_Sales)", as: "NA_num" },
    { calculate: "toNumber(datum.EU_Sales)", as: "EU_num" },
  ],

  mark: { type: "point", filled: true, opacity: 0.4, size: 80 },

  encoding: {
    x: { 
        field: "NA_num", 
        type: "quantitative", 
        title: "NA Sales " },

    y: { 
        field: "EU_num", 
        type: "quantitative", 
        title: "EU Sales " },

    tooltip: [
      { field: "Name", type: "nominal", title: "Game" },
      { field: "NA_num", type: "quantitative", title: "NA " },
      { field: "EU_num", type: "quantitative", title: "EU " }
    ]
  },

  width: 666,
  height: 375,
};

vegaEmbed("#vis4", spec4);

// vis4_2
const TOP_PUBLISHER = 15;

const spec4_2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { url: "./videogames_wide.csv" },

  transform: [

    { calculate: "toNumber(datum.NA_Sales)", as: "NA_num" },
    { calculate: "toNumber(datum.EU_Sales)", as: "EU_num" },
    { calculate: "toNumber(datum.Global_Sales)", as: "Global_num" },

    {
      aggregate: [
        { op: "sum", field: "NA_num", as: "NA_total" },
        { op: "sum", field: "EU_num", as: "EU_total" },
        { op: "sum", field: "Global_num", as: "Global_total" }
      ],
      groupby: ["Publisher"]
    },

    {
      window: [{ op: "rank", as: "rank" }],
      sort: [{ field: "Global_total", order: "descending" }]
    },

    { filter: `datum.rank <= ${TOP_PUBLISHER}` }
  ],

  mark: { type: "circle" },

  encoding: {
    x: {
      field: "NA_total",
      type: "quantitative",
      title: "Total NA Sales"
    },

    y: {
      field: "EU_total",
      type: "quantitative",
      title: "Total EU Sales"
    },

    size: {
      field: "Global_total",
      type: "quantitative",
      title: "Global Sales"
    },

    tooltip: [
      { field: "Publisher", type: "nominal" },
      { field: "NA_total", type: "quantitative", title: "NA Sales " },
      { field: "EU_total", type: "quantitative", title: "EU Sales " },
      { field: "Global_total", type: "quantitative", title: "Global Sales " }
    ]
  },

  width: 666,
  height: 420,
};

vegaEmbed("#vis4_2", spec4_2);