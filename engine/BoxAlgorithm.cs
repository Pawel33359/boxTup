namespace Packing;


public class BoxAlgorithm
{
    private readonly Dimensions _box;
    private readonly List<Dimensions> _items;

    public BoxAlgorithm(Dimensions box, List<Dimensions> items)
    {
        _box = box;
        _items = items;
    }

    public double CalculateBoxVolume()
    {
        return _box.X * _box.Y * _box.Z;
    }

    public double CalculateItemsVolume()
    {
        double totalVolume = 0;
        foreach (var item in _items)
        {
            totalVolume += item.X * item.Y * item.Z;
        }
        return totalVolume;
    }
}