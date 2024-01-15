public class AssertionError {}

public class ResourcePool {
  public Resource get(){
    Resouce result;
    if(available.isEmpty()) {
      result = Resouce.create();
      allocated.add(result)
    } else {
      try {
        result = available.pop();
        allocated.add(result);
      } catch(NoSuchElementException e) {
        throw new AssertionError("도달 불가");
      }
    }
    return result;
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
}