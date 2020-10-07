import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { translate, toSparql } from 'sparqlalgebrajs';

export function SparqlParser() {

    const sparqlQuery = 'SELECT * WHERE { ?x ?y ?pippo. {SELECT * WHERE {?s ?p ?pippo} } }';
    const sparqlAlgebra = translate(sparqlQuery);
    // const sparqlAlgebra = {
    //     type: 'project',
    //     input: {
    //         type: 'bgp', patterns: [ {
    //             type: 'pattern',
    //             subject: '?x',
    //             predicate: '?y',
    //             object: '?z' } ] },
    //     variables: [ '?x', '?y', '?z' ] };

    return (
        <div>
        <div class="sparql-parser-view" style={{'text-align': 'left', 'font-size':'x-small', 'white-space': 'pre-wrap'}}>
            <code style={{'white-space': 'pre-wrap'}}>{JSON.stringify(sparqlAlgebra, null, 2)}</code>
        </div>
        <div class="sparql-parser-view" style={{'text-align': 'left', 'font-size':'x-small', 'white-space': 'pre-wrap'}}>
            <code style={{'white-space': 'pre-wrap'}}>{toSparql(sparqlAlgebra)}</code>
        </div>
        </div>
    );
}
