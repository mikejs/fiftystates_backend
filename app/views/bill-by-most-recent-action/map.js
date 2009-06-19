function(doc) {
    if(doc.type == 'bill') {
        if(doc.actions.length > 0) {
            emit(doc.actions[doc.actions.length - 1].date,
                 {'bill_id': doc.bill_id,
                  'session': doc.session,
                  'chamber': doc.chamber,
                  'title': doc.title,
                  'state': doc.state});
        }
    }
}
