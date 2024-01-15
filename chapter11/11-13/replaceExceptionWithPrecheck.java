public class AssertionError {}

public class ResourcePool {
  public Resource get(){
    Resouce result;
    if(available.isEmpty()) {
      result = Resouce.create();
    } else {
      result = available.pop();
    }
    allocated.add(result)
    return result;
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
}