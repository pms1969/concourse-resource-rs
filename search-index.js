var searchIndex = JSON.parse('{\
"concourse_resource":{"doc":"Helper to implement a Concourse resource in Rust","i":[[24,"IntoMetadataKV","concourse_resource","",null,null],[3,"InOutput","","Output of the \\\"in\\\" step of the resource",null,null],[12,"version","","The fetched version.",0,null],[12,"metadata","","A list of key-value pairs. This data is intended for…",0,null],[3,"OutOutput","","Output of the \\\"out\\\" step of the resource",null,null],[12,"version","","The resulting version.",1,null],[12,"metadata","","A list of key-value pairs. This data is intended for…",1,null],[3,"Empty","","Empty value that can be used as `InParams`, `InMetadata`,…",null,null],[3,"BuildMetadata","","When used in a \\\"get\\\" or \\\"put\\\" step, metadata about the…",null,null],[12,"id","","The internal identifier for the build. Right now this is…",2,null],[12,"name","","The build number within the build\'s job.",2,null],[12,"job_name","","The name of the build\'s job.",2,null],[12,"pipeline_name","","The pipeline that the build\'s job lives in.",2,null],[12,"team_name","","The team that the build belongs to.",2,null],[12,"atc_external_url","","The public URL for your ATC; useful for debugging.",2,null],[0,"internal","","Internal types used to wrap inputs and outputs. They…",null,null],[3,"KV","concourse_resource::internal","Simple Key-Value struct as needed by Concourse for metadata",null,null],[12,"name","","The name of this metadata",3,null],[12,"value","","The value of this metadata",3,null],[3,"InOutputKV","","Output of the \\\"in\\\" step of the resource",null,null],[12,"version","","The fetched version.",4,null],[12,"metadata","","A list of key-value pairs. This data is intended for…",4,null],[3,"OutOutputKV","","Output of the \\\"out\\\" step of the resource",null,null],[12,"version","","The resulting version.",5,null],[12,"metadata","","A list of key-value pairs. This data is intended for…",5,null],[3,"CheckInput","","Input of the \\\"check\\\" step of the resource",null,null],[12,"source","","Resource configuration, from the `source` field",6,null],[12,"version","","Latest version retrieved, or `None` on first check",6,null],[3,"InInput","","Input of the \\\"in\\\" step of the resource",null,null],[12,"source","","Resource configuration, from the `source` field",7,null],[12,"version","","Version to retrieve",7,null],[12,"params","","Step configuration, from the `params` field",7,null],[3,"OutInput","","Input of the \\\"out\\\" step of the resource",null,null],[12,"source","","Resource configuration, from the `source` field",8,null],[12,"params","","Step configuration, from the `params` field",8,null],[8,"IntoMetadataKV","concourse_resource","Trait for Metadata to be usable as Concourse Metadata.…",null,null],[10,"into_metadata_kv","","Turn `self` into a `Vec` of `internal::KV`",9,[[],[["kv",3],["vec",3]]]],[8,"Resource","","The methods and associated types needed to implement a…",null,null],[16,"Version","","A version of the resource",10,null],[16,"Source","","Resource configuration, from the `source` field",10,null],[16,"InParams","","Parameters for the \\\"in\\\" step, from the `params` field",10,null],[16,"InMetadata","","A list of key-value pairs for the \\\"in\\\" step. This data is…",10,null],[16,"OutParams","","Parameters for the \\\"out\\\" step, from the `params` field",10,null],[16,"OutMetadata","","A list of key-value pairs for the \\\"out\\\" step. This data is…",10,null],[10,"resource_check","","A resource type\'s check method is invoked to detect new…",10,[[["option",4],["option",4]],["vec",3]]],[10,"resource_in","","The in method is passed the configured source, a precise…",10,[[["option",4],["option",4]],[["inoutput",3],["result",4],["box",3]]]],[10,"resource_out","","The out method is called with the resource\'s source…",10,[[["option",4],["option",4]],["outoutput",3]]],[11,"build_metadata","","When used in a \\\"get\\\" or \\\"put\\\" step, will return metadata…",10,[[],["buildmetadata",3]]],[14,"create_resource","","Macro that will build the `main` function from a struct…",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","concourse_resource::internal","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"into_metadata_kv","concourse_resource","",11,[[],[["kv",3],["vec",3]]]],[11,"clone","","",11,[[],["empty",3]]],[11,"default","","",11,[[],["empty",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"serialize","concourse_resource::internal","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"serialize","concourse_resource","",0,[[],["result",4]]],[11,"serialize","","",1,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"deserialize","concourse_resource::internal","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","concourse_resource","",11,[[],["result",4]]]],"p":[[3,"InOutput"],[3,"OutOutput"],[3,"BuildMetadata"],[3,"KV"],[3,"InOutputKV"],[3,"OutOutputKV"],[3,"CheckInput"],[3,"InInput"],[3,"OutInput"],[8,"IntoMetadataKV"],[8,"Resource"],[3,"Empty"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);