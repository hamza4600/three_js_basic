## Basic of Three.js

# Light
* [AmbientLight](AmbientLight.md) - AmbientLight 
used to simulate the light from the environment in all directions.
* [DirectionalLight](DirectionalLight.md) - DirectionalLight
used to simulate the light from a single direction.
* [HemisphereLight](HemisphereLight.md) - HemisphereLight
used to simulate the light from up and down directions (sky and ground).
* [React Area Light](Light.md) -  React Area Light
used to simulate the light from a single direction with a specific area. (height and width) for indore and outdoor. 
* [Directed Light](DirectedLight.md) - Directed Light
used for shadow casting. and it is a light source that emits light in a specific direction. on specific target object.
* [Point Light](PointLight.md) - Point Light
used for shadow casting. and it is a light source that emits light in all directions from a specific point.
* [Spot Light](SpotLight.md) - Spot Light
work as flash light or torch light. it is a light source that emits light in a specific direction from a specific point. (angle , direction , distance , penumbra , decay , target)

# Camera
* [Perspective Camera](PerspectiveCamera.md) - Perspective Camera
used to simulate the camera with perspective view. (fov , aspect , near , far)
* [Orthographic Camera](OrthographicCamera.md) - Orthographic Camera
used to simulate the camera with orthographic view. (left , right , top , bottom , near , far) used for 2D games.
lookAt() - used to set the camera target. (x , y , z)

# Shadow
* Ponit Light Shadow
* Directed Light Shadow
* Spot Light Shadow
they all cause shadow casting. and it is a light source that emits light in a specific direction from a specific point.

# Material
*  [MeshBasicMaterial](MeshBasicMaterial.md) - MeshBasicMaterial
used to simulate the material with basic view. (color , wireframe , wireframeLinewidth , wireframeLinecap , wireframeLinejoin , fog , lights , clippingPlanes , clipShadows , skinning , morphTargets , morphNormals)
* [MeshLambertMaterial](MeshLambertMaterial.md) - MeshLambertMaterial
used to simulate the material with lambert view. (color , emissive , emissiveIntensity , emissiveMap , wireframe , wireframeLinewidth , wireframeLinecap , wireframeLinejoin , fog , lights , clippingPlanes , clipShadows , skinning , morphTargets , morphNormals)  for dull material.
* [MeshPhongMaterial](MeshPhongMaterial.md) - MeshPhongMaterial
used to simulate the material with phong view. (color , specular , shininess , emissive , emissiveIntensity , emissiveMap , wireframe , wireframeLinewidth , wireframeLinecap , wireframeLinejoin , fog , lights , clippingPlanes , clipShadows , skinning , morphTargets , morphNormals) for shiny material.
* [MeshStandardMaterial](MeshStandardMaterial.md) - MeshStandardMaterial
used to simulate the material with standard view. (color , roughness , metalness , emissive , emissiveIntensity , emissiveMap , wireframe , wireframeLinewidth , wireframeLinecap , wireframeLinejoin , fog , lights , clippingPlanes , clipShadows , skinning , morphTargets , morphNormals) for shiny material and refelective lights .

# Geometry
* [BoxGeometry](BoxGeometry.md) - BoxGeometry
used to simulate the geometry with box view. (width , height , depth , widthSegments , heightSegments , depthSegments)
* [CircleGeometry](CircleGeometry.md) - CircleGeometry
used to simulate the geometry with circle view. (radius , segments , thetaStart , thetaLength)
* [ConeGeometry](ConeGeometry.md) - ConeGeometry
used to simulate the geometry with cone view. (radius , height , radialSegments , heightSegments , openEnded , thetaStart , thetaLength)
* [CylinderGeometry](CylinderGeometry.md) - CylinderGeometry
used to simulate the geometry with cylinder view. (radiusTop , radiusBottom , height , radialSegments , heightSegments , openEnded , thetaStart , thetaLength)
* [DodecahedronGeometry](DodecahedronGeometry.md) - DodecahedronGeometry
used to simulate the geometry with dodecahedron view. (radius , detail)
* [ExtrudeGeometry](ExtrudeGeometry.md) - ExtrudeGeometry
used to simulate the geometry with extrude view. (shapes , options)
* [IcosahedronGeometry](IcosahedronGeometry.md) - IcosahedronGeometry
used to simulate the geometry with icosahedron view. (radius , detail)
* [LatheGeometry](LatheGeometry.md) - LatheGeometry
used to simulate the geometry with lathe view. (points , segments , phiStart , phiLength)
* [OctahedronGeometry](OctahedronGeometry.md) - OctahedronGeometry
used to simulate the geometry with octahedron view. (radius , detail)
* [ParametricGeometry](ParametricGeometry.md) - ParametricGeometry
used to simulate the geometry with parametric view. (func , slices , stacks)
* [PlaneGeometry](PlaneGeometry.md) - PlaneGeometry
used to simulate the geometry with plane view. (width , height , widthSegments , heightSegments)
* [PolyhedronGeometry](PolyhedronGeometry.md) - PolyhedronGeometry
used to simulate the geometry with polyhedron view. (vertices , indices , radius , detail)
* [RingGeometry](RingGeometry.md) - RingGeometry
used to simulate the geometry with ring view. (innerRadius , outerRadius , thetaSegments , phiSegments , thetaStart , thetaLength)
* [SphereGeometry](SphereGeometry.md) - SphereGeometry
used to simulate the geometry with sphere view. (radius , widthSegments , heightSegments , phiStart , phiLength , thetaStart , thetaLength)
* [TetrahedronGeometry](TetrahedronGeometry.md) - TetrahedronGeometry
used to simulate the geometry with tetrahedron view. (radius , detail)
* [TextGeometry](TextGeometry.md) - TextGeometry
used to simulate the geometry with text view. (text , parameters)
* [TorusGeometry](TorusGeometry.md) - TorusGeometry
used to simulate the geometry with torus view. (radius , tube , radialSegments , tubularSegments , arc)
* [TorusKnotGeometry](TorusKnotGeometry.md) - TorusKnotGeometry
used to simulate the geometry with torus knot view. (radius , tube , tubularSegments , radialSegments , p , q , heightScale)
* [TubeGeometry](TubeGeometry.md) - TubeGeometry
used to simulate the geometry with tube view. (path , tubularSegments , radius , radialSegments , closed)


# Variables are named areas of the computer’s memory. We can save some data (a value) to a variable and then use the name to 

# How to stop user to not go accrosss material