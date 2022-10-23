# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


Assuming following to be the current schemas of Facilities , Shits and Agents.

  **facilities**
  - id (internal db Id)  
  - facility_name

  **agents**
  - id (internal db Id) 
  - agent_name 
  - facility_id (facility Id as foreign key)

  **shifts**
  - id (internal db Id)  
  - facility_id (facility Id as foreign key)
  - agent_id (agent Id as foreign key)
  - shift_timing

Following are the tickets which will be required to incorporate the functionality to generate the reports with customId as per facility

1) Added new table to support custom ID which can be assigned by the facility to the agent, schema for new table custom_agent_ids should look like below

      **custom_agent_ids**
      - custom_agent_internal_id (internal db Id)  
      - facility_id (facility Id as foreign key)
      - agent_id (agent Id as foreign key)
      - custom_id (custom id which will be assinged by facility)

2) updating the current Schema `shifts` table to new column of `custom_agent_internal_id` for performing join operation on `shifts` and `custom_agent_ids` table

      **shifts**
      - id (internal db Id)  
      - facility_id (facility Id as foreign key)
      - agent_id (agent Id as foreign key)
      - custom_agent_internal_id (foreign key(internal db id) from custom_agent_internal_id)
      - shift_timing

Time estimation for tickets 1 & 2 will be around  1 day since the schema updates are backword compatible with the exsting functionality

3) Adding support for updateCustomID API

      - This function will need 2 parameters namely `custom_agent_internal_id` and custom_id to update the custom id assigned to that agent.

4) Adding support for getReportsByAgent API

      - This function will need 2 parameters namely custom_agent_internal_id and facility_id to query `shifts` table to get shifts data which can be passed to `generateReport` to generate the report for that agent

The estimations for tickets 3 & 4 will be around 2 - 3 days including the test cases for development.
