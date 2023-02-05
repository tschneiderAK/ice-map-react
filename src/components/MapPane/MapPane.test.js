import {render, screen} from '@testing-library/react'
import MapPane from './MapPane'

it('Displays the Map Pane', () => {
    render(<MapPane />)
    const mapElement = screen.getByText(/map/i)
    expect(mapElement).toBeInTheDocument()
});