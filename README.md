# Monehh

## Core Use Case

As a _user_,
I want to _track my expenses_
so that I _know where my money went_

## User Flow

1. User downloads CSV files from bank(s)
2. User uploads CSV to application
3. User performs categorisations and manually corrects some entries
4. User views report

## Use Cases

1. Users should be able to create new entries
   - upload csv
   - fill in web form
2. Users should be able to edit existing entries
3. Users should be able to categorise existing entries
4. Users should be able to delete existing entries
5. Users should be able to see a list of existing entries
6. Users should be able to see an aggregated report of existing entries

## Models

- Users
- Upload
- Expenses
- Report
- Categories (enum?)

## Relationships

- _User_ --creates-> _Upload_ --contains many-> _Expenses_
- _User_ --modifies (including _Categories_) of-> _Expenses_
- _User_ --view-> _Report_ --made up of one of more-> _Expenses_
  - currently undecided if reports should be persistent
