import { Algebra } from 'sparqlalgebrajs';
import {Term} from "rdf-js";

export interface GraphSource {
    [key:string]: any;
    type: string;
    consumers: GraphConsumer[];
}

export interface GraphConsumer {}

// export interface Graph extends GraphSource {
//     type: 'graph';
//     graph: RDFGraph;
// }

export interface GraphSelector extends GraphSource, DatasetConsumer {
    type: 'graphSelector';
    datasetSource: DatasetSource;
    graphName: Term;
}

export interface ConstructQuery extends GraphSource DatasetConsumer {
    type: 'constructQuery';
    graph: DatasetSource;
    datasetSource: DatasetSource;
    construct: Algebra.Construct;
}

export interface DatasetSource {
    [key:string]: any;
    type: string;
    consumers: DatasetConsumer[];
}

export interface DatasetConsumer {}

export interface DatasetBuilder extends DatasetSource, GraphConsumer {
    type: 'datasetBuilder';
    defaultGraph: GraphSource;
    namedGraphs: Map<RDFTerm, GraphSource>;
}

export interface SparqlEndpoint extends DatasetSource {
    type: 'sparqlEndpoint';
    baseURL: string;
}

export interface DefaultSparqlEndpoint extends DatasetSource {
    type: 'defaultSparqlEndpoint';
}

export interface RDFTermSource {
    [key:string]: any;
    type: string;
    consumers: RDFTermConsumer[];
}

export interface RDFTermConsumer {}

export interface RDFTerm extends RDFTermSource {
    type: 'rdfTerm';
    rdfTerm: Term;
}

export interface VarFromSelectQuery extends RDFTermSource, DatasetConsumer, RDFTermConsumer {
    type: 'varFromSelect';
    varName: string;
    selectQuery: Algebra.Operation;
    datasetSource: DatasetSource;
    params: Map<string, RDFTermSource>;
}

export interface NodeSource {
    graphSource: GraphSource;
    rdfTermSource: RDFTermSource;
}

export interface Context {
    nodeSource: NodeSource;
    rdfTermSource: RDFTermSource;
}
