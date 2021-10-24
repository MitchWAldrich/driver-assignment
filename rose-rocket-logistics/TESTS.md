Test #1: Dragging an Unassigned Order onto a Driver's Board should assign that order to the driver.
  - Click and hold Unassigned Order, drag over Driver column, drop
  - Result: Order is visible on Driver's board and persists in the database

Test #2: Dragging an Order from one Driver's Board onto another Driver's Board should assign that order to the new driver.
  - Click and hold Assigned Order, drag over to new Driver board, drop
  - Result: Order is visible on new Driver's board and persists in the database

Test #3: Dragging an Order from a Driver's Board onto the Unassigned Orders board should unassign that order from driver.
  - Click and hold Assigned Order, drag over to Unassigned Orders board, drop
  - Result: Order is visible on Unassigned Order's board and persists in the database

Test #3: Clicking the Edit icon on an Unassigned Order should render an editable form.
  - Click 'Edit' icon on Unassigned Order
  - Result: Observe that Cost and Revenue fields are now editable input fields

Test #4: Updating input fields in Form view should render updated information on Submit.
  - Click 'Edit' icon, update Cost and/or Revenue field, click 'Submit'
  - Result: Order displays editted information and persists in the database

Test #5: Incomplete order should render with editable fields where incomplete, and should not be able to assign to a Driver with incomplete information
  - Observe Unassigned Orders board where any unfilled Cost and Revenue fields are editable, try to drag and drop order onto a Driver board
  - Result: Incomplete board does not drop onto Driver's board and is not assigned