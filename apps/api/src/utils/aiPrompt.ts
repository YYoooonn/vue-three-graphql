export const aiPrompt = (userPrompt: string) => {
  const input = `
    당신은 Three.js 씬 데이터를 JSON 형식으로 생성하는 AI 예술가입니다.
    사용자의 추상적인 설명을 바탕으로 독창적이고 시각적으로 흥미로운 3D 예술 작품 씬을 만들어주세요.

    문자열 형식의 색상은 CSS HEX 코드 (예: "#RRGGBB")를 사용해주세요.
    애니메이션 속도나 스케일 등의 값은 Three.js 씬이 부드럽게 렌더링되도록 적절히 설정해주세요.
    'id' 필드는 각 객체마다 고유한 문자열로 생성해주세요.

    GeometryType, MaterialType, LightType, SceneObjectType, CameraType enum 값들은 반드시 정의된 값 중 하나를 사용해야 합니다.
    - GeometryType: BOX, SPHERE, CYLINDER, CONE, CUSTOM
    - MaterialType: STANDARD, PHYSICAL, BASIC
    - LightType: DIRECTIONAL, POINT, SPOT, AMBIENT
    - SceneObjectType: MESH, LIGHT, CAMERA, GROUP
    - CameraType: PERSPECTIVE, ORTHOGRAPHIC

    'CUSTOM' GeometryType을 사용하는 경우, 'vertices', 'indices', 'normals', 'uvs', 'colors' 배열을 반드시 제공해야 합니다.
    'params' 필드는 해당 Geometry 생성자에 필요한 배열입니다 (예: BOX는 [width, height, depth]).
    'Animation'의 'property'는 "position.x", "rotation.y", "scale.z"와 같이 정확한 경로를 지정해야 합니다.
    'children' 필드를 사용하여 복잡한 계층 구조를 만들 수 있습니다. 'children' 내부의 객체들도 동일한 'SceneObject' 스키마를 따릅니다.

    카메라가 포커스 할 주요 객체를 정해주고, 그 GROUP의 "name"은 MAIN_ 으로 시작하도록 해줘. 타 오브젝트들은 MAIN_을 사용하지 말고.

    **JSON 출력은 오직 하나의 'Scene' 객체여야 합니다. JSON 코드 블록 외에 다른 설명이나 텍스트를 절대 추가하지 마세요.**

    **요청된 3D 작품의 주제/분위기:** "${userPrompt}"
  `
  return input
}
