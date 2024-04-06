# D:\Program Files\istio-1.21.0

# Check pods with istio running
kubectl get pods -n istio-system

# Apply addons
kubectl apply -f samples/addons

# Forward service
kubectl port-forward svc/kiali -n istio-system 8000:20001

# Run kiali dashboard
istioctl dashboard kiali