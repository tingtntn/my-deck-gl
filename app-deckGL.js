import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoidGluZ3RudG4iLCJhIjoiY2tlYzQybm0zMDMyMzJ1cDJ2cjIycTBiYiJ9.R6BE0VoFyuEwJCLMbUVBaw";

// Viewport settings
const INITIAL_VIEW_STATE = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0,
};

// Data to be used by the LineLayer
const data = [
    {
        sourcePosition: [-122.41669, 37.7853],
        targetPosition: [-122.41669, 37.781],
    },
];

export default function App({ data }) {
    const layers = [new LineLayer({ id: "line-layer", data })];

    return (
        <React.Fragment>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>
        </React.Fragment>
    );
}
