let easycam;
let shape;
let textureimage;

function preload() {
    // OBJ 파일 로드. 필요에 따라 파일 형식과 경로를 변경하세요.
    shape = loadModel("./model/paddlev1.obj", true);
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    easycam = createEasyCam();

    // 기본 재질 설정
    normalMaterial();
}

function draw() {
    background(200);
    ambientLight(100);
    directionalLight(255, 255, 255, 0, 0, -1);

    // 모델 회전
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    scale(5);
    model(shape);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    easycam.setViewport([0, 0, windowWidth, windowHeight]);
}
