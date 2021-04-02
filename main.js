function setup()
{
    CaNVAS = createCapture(VIDEO);
    CaNVAS.size(300,590);

    CANVaS = createCanvas(1050,510);
    CANVaS.position(300,100);
    
    poseNet = ml5.poseNet(CaNVAS,modelloaded);
    poseNet.on("pose",gotpose);
}

function modelloaded()
{
    console.log("today i am in a bad mood");
}

function gotpose(result)
{
    if(result.lenght>0)
    {
        console.log(result)
    }
}

function draw()
{
    background("black")
}