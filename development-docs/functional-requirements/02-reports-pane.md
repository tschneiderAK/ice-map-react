# **Title:** 02, Reports Pane

# **Narrative**

**As a:** Site user  
**I want:** to access relevant reports and photos  
**So that:** I can decide where to skate

# **Acceptance Criteria**


## **Scenario** 2.1: User views reports in reports pane
**Given** User has not entered any filter critefria,  
**When** the reports pane loads
**Then** the reports pane will contain reports
**and** each report will contain:
- Report Datetime
- Feature Name (Label: Location)
- Reporter name
- Ice quality
- Image Thumbnail(s)

## **Scenario** 2.2: User views reports with default sorting.
**Given** User has not entered any filter **or** sort criteria,  
**When** the reports pane loads  
**Then**  the reports pane **shall** display reports  
**And** the reports **shall** all be from features within the current map area
**And** the reports **shall** be sorted by <report.date>, <report.time> in descending order.
**And** the *Most Recent* filter button **should** be highlighted.

## **Scenario** 2.3: User views reports sorted by ice quality.
**Given** User has not entered any filter criteria,  
**When** User selects the *Best Quality* filter button  
**Then** the reports pane **shall** display reports
**And** the reports **shall** all be from features within the current map area
**And** the reports **shall** be sorted by <report.quality> in descending order.
**And** the *Best Quality* filter button **should** be highlighted.

## **Scenario** 2.4: User views reports sorted by recency.
**Given** User has not entered any filter criteria,  
**When** User selects the *Best Quality* filter button  
**Then** the reports pane **shall** display reports
**And** the reports **shall** all be from features within the current map area
**And** the reports **shall** be sorted by <report.date>, <report.time> in descending order

## **Scenario** 2.5: User changes sorting to recency.
**Given** the reports pane is sorted by *Best Quality*,  
**When** User selects the *Most Recent* filter button  
**Then** the reports pane **shall** display reports
**And** the reports **shall** all be from features within the current map area
**And** the reports **shall** be sorted by <report.date>, <report.time> in descending order.
**And** the *Most Recent* filter button **shall** be highlighted  
**And** the *Best Quality* filter button **shall** be un-highlighted

## **Scenario** 2.6: User changes sorting to quality.
**Given** the reports pane is sorted by recency,  
**When** User selects the *Best Quality* filter button  
**Then** the reports pane **shall** display reports
**And** the reports **shall** all be from features within the current map area
**And** the reports **shall** be sorted by <report.quality> in descending order.
**And** the *Best Quality* filter button **shall** be highlighted  
**And** the *Most Recent* filter button **shall** be un-highlighted