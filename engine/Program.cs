using Packing;

var box = new Dimensions
{
    X = 100,
    Y = 100,
    Z = 100
};

var items = new List<Dimensions>
{
    new() { X = 20, Y = 30, Z = 40 },
    new() { X = 10, Y = 15, Z = 20 },
    new() { X = 50, Y = 25, Z = 30 }
};

var algorithm = new BoxAlgorithm(box, items);

Console.WriteLine($"Box Volume: {algorithm.CalculateBoxVolume()}");
Console.WriteLine($"Items Volume: {algorithm.CalculateItemsVolume()}");