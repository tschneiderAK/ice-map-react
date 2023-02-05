import {render, screen} from '@testing-library/react'
import ReportsPane from './ReportsPane'

it('renders report pane', () => {
    render(<ReportsPane />)
    const reportPaneElement = screen.getByText(/reports/i)
    expect(reportPaneElement).toBeInTheDocument()
});