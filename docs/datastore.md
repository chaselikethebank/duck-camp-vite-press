# Initial notes on Data


Duck Camp manages: 
Each camp has: 
admins, 
guides, 
hunts, 
blinds, 
clients, 
weather api
payments (future feature)


## Why Mongo DB (instead of SQLite 3)
I like sqlite 3 for this but for future proofing, Mongod DB. 

I need to keep each camp's data separate. I'll use MongoDB to organize each camp's data into isolated documents or collections.

## On calculating the progression of a hunt 

### Works Collection Fields:
- **_id**: Unique identifier, automatically generated by MongoDB.
- **workStatus**: Enum (see below for possible values).
- **timestamp**: Automatically generated by MongoDB.
- **notes**: Optional text field for additional comments.

### Work Status Enum Values:
1. preHunt  
2. postHunt  
3. weather  
4. blindUnassigned  
5. guideUnassigned  
6. blindAssigned  
7. guideAssigned  
8. weatherLockedIn  
9. clientsAssigned  
10. huntScheduled  
11. huntInProgress  
12. huntCancelled  
13. huntRescheduled  
14. equipmentPrep  
15. huntCompleted

## Push Notifications 

Set up a cron of sort to watch for status change in "Works" collection to push notification on change dynamically to just guides probably. Probably just in app. 
