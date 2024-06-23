import Map, { Layer, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl } from 'react-map-gl';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2llbWtpc3QiLCJhIjoiY2xwajFrcG1pMDVqYjJtbGVpa3U3a2w4ZSJ9.TuXnG58GOSDT1o2HGn9j4w';

const threeDBuildings = {
    id: 'add-3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 10,
    paint: {
        'fill-extrusion-color': '#aaa',
        'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']],
        'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']],
        'fill-extrusion-opacity': 0.6,
    },
};

export function Mapbox({ user, theme }) {
    const [viewState, setViewState] = useLocalStorage('viewState', {
        lng: 39.1925,
        lat: 21.4858,
        zoom: 12,
        pitch: 100,
        bearing: 0,
    });
    const { lng, lat, zoom, pitch, bearing } = viewState;

    return (
        <Map
            style={{
                width: '100vw',
                height: '100vh',
            }}
            maxBounds={[
                [39.0679, 21.3423],
                [39.4365, 21.8549],
            ]}
            fog={{
                range: [0.8, 8],
                color: '#75CFF0',
                'horizon-blend': 0.5,
                'high-color': '#245bde',
                'space-color': '#000000',
                'star-intensity': 0.15,
            }}
            longitude={lng}
            latitude={lat}
            zoom={zoom}
            pitch={pitch}
            bearing={bearing}
            onMove={({ viewState }) => {
                setViewState(prevState => {
                    return {
                        ...prevState,
                        lng: viewState.longitude,
                        lat: viewState.latitude,
                        zoom: viewState.zoom,
                        pitch: viewState.pitch,
                        bearing: viewState.bearing,
                    };
                });
            }}
            reuseMaps={true}
            mapStyle={`mapbox://styles/mapbox/${theme}-v11`}
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Layer {...threeDBuildings} />
            <GeolocateControl />
            <FullscreenControl />
            <NavigationControl />
            <ScaleControl position='top-left' />
        </Map>
    );
}
