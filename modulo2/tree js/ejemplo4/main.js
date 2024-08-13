function raycast ( e ) {
    // Step 1: Detect light helper
        //1. sets the mouse position with a coordinate system where the center
        //   of the screen is the origin
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    
        //2. set the picking ray from the camera position and mouse coordinates
        raycaster.setFromCamera( mouse, camera );    
    
        //3. compute intersections (note the 2nd parameter)
        var intersects = raycaster.intersectObjects( scene.children, true );
    
        for ( var i = 0; i < intersects.length; i++ ) {
            console.log( intersects[ i ] ); 
            /*
                An intersection has the following properties :
                    - object : intersected object (THREE.Mesh)
                    - distance : distance from camera to intersection (number)
                    - face : intersected face (THREE.Face3)
                    - faceIndex : intersected face index (number)
                    - point : intersection point (THREE.Vector3)
                    - uv : intersection point in the object's UV coordinates (THREE.Vector2)
            */
        }
    // Step 2: Detect normal objects
        //1. sets the mouse position with a coordinate system where the center
        //   of the screen is the origin
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    
        //2. set the picking ray from the camera position and mouse coordinates
        raycaster.setFromCamera( mouse, camera );    
    
        //3. compute intersections (no 2nd parameter true anymore)
        var intersects = raycaster.intersectObjects( scene.children );
    
        for ( var i = 0; i < intersects.length; i++ ) {
            console.log( intersects[ i ] ); 
            /*
                An intersection has the following properties :
                    - object : intersected object (THREE.Mesh)
                    - distance : distance from camera to intersection (number)
                    - face : intersected face (THREE.Face3)
                    - faceIndex : intersected face index (number)
                    - point : intersection point (THREE.Vector3)
                    - uv : intersection point in the object's UV coordinates (THREE.Vector2)
            */
        }
    
    }